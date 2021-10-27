import { Injectable } from "@angular/core";
import { TextService } from "./text.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TextsService{
  private texts: TextService[] = [];
  private url: string = "/api/texts/all";
  private deleteUrl: string = "/api/AdminPanel/DeleteText";

  constructor(private http: HttpClient) {
    this.update();
  }
  update() {
    this.texts = [];
    this.loadTexts().subscribe((data: any) => {
      data.forEach((element: any) => {        
        if(element.textContent)
          this.addText(element.title, element.textContent, element.id);
      });
    });
  }
  get Texts()
  {
    return this.texts;
  }
  getTextById(id: number) {
    for(let i = 0; i < this.texts.length; i++)
      if(this.texts[i].id == id)
        return this.texts[i];
    return undefined;
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
  private loadTexts(){
    return this.http.get(this.url);
  }
  private addText(title: string, content: string, id: number)
  {
    let lengthOfPart = 200;
    let text = new TextService(title, content, id);
    text.partOfContent = text.content.substring(0, lengthOfPart);
    if(text.content.length > lengthOfPart)
      text.partOfContent += "...";
    this.texts.push(text);
  }
}
