import { Injectable } from "@angular/core";
import { TextService } from "./text.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TextsService{
  private texts: TextService[] | null = null;
  private url: string = "/api/texts/all";
  private deleteUrl: string = "/api/AdminPanel/DeleteText";
  private updateIsRunning: boolean | null = null;
  constructor(private http: HttpClient) {
  }
  async update() {
    this.texts = [];
    var data = await this.loadTexts().toPromise();
    this.updateIsRunning = false;
    data.forEach((element: any) => {        
      if(element.textContent)
        this.addText(element.title, element.textContent, element.id);
    });
    this.updateIsRunning = false;
  }
  get Texts() : TextService[]
  {
    this.checkTexts();
    return this.texts!;
  }
  async getTextById(id: number): Promise<TextService | null> {
    await this.checkTexts();
    id = parseInt(id.toString());
    for(let i = 0; i < this.texts!.length; i++)
      if(this.texts![i].id === id)
        return Promise.resolve(this.texts![i]);
    return Promise.resolve(null);
  }
  deleteTextById(id: number) {
    var token = localStorage.getItem("token");    
    var header = new HttpHeaders({"Authorization": "Bearer " + token});
    var body = {
      Id: id
    };
    this.http.post(this.deleteUrl, body, { headers: header }).subscribe(()=>{
      this.update();
    });
  }
  getTextSizeNameById(id: number) {
    switch(id)
    {
      case 1:
        return "Ultra short";
      case 2:
        return "Short";
      case 3:
        return "Medium";
      case 4:
        return "Large";
      default:
        return "Full";
    }
  }
  private loadTexts(){
    return this.http.get<any[]>(this.url);
  }
  private addText(title: string, content: string, id: number)
  {
    this.checkTexts();
    let lengthOfPart = 200;
    let text = new TextService(title, content, id);
    text.partOfContent = text.content.substring(0, lengthOfPart);
    if(text.content.length > lengthOfPart)
      text.partOfContent += "...";
    this.texts!.push(text);
  }
  private async checkTexts() {
    if(this.texts === null)
      await this.update();
  }
}
