import { Injectable } from "@angular/core";
import { TextService } from "./text.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TextsService{
  private texts: TextService[] = [];
  private url: string = "/api/texts/all";

  constructor(private http: HttpClient) {
    let text;
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
  getTextById(id: string) {
    return this.texts.find(t => t.id === id) ;
  }
  private loadTexts(){
    return this.http.get(this.url);
  }
  private addText(title: string, content: string, id: string)
  {
    let lengthOfPart = 200;
    let text = new TextService(title, content, id);
    text.partOfContent = text.content.substring(0, lengthOfPart);
    if(text.content.length > lengthOfPart)
      text.partOfContent += "...";
    this.texts.push(text);
  }
}
