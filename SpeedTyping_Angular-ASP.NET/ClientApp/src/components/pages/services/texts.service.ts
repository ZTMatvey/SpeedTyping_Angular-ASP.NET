import { Injectable } from "@angular/core";
import { TextService } from "./text.service";

@Injectable({
    providedIn: "root"
})
export class TextsService{
    private texts: TextService[] = [];

    constructor() {
        this.loadTexts();
    }
    get Texts()
    {
        return this.texts;
    }
    private loadTexts(){
      
      for(let i = 0; i < 5; i++)
        this.addText("Lorem", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis iusto voluptatem quo dolores? Vel ea quaerat debitis. Nisi consequuntur doloremque tempora porro. Reprehenderit esse distinctio amet, quisquam deserunt fuga repellat facere eligendi voluptate accusantium iure quod odit vero reiciendis optio dignissimos illum cum in repudiandae nemo sit sunt? Similique, voluptate?", "123");
      for(let i = 0; i < 5; i++)
        this.addText("Night Witches", 
        `From the depths of hell in silence
        Cast their spells, explosive violence
        Russian night time flight perfected
        Flawless vision, undetected`, 
        "122");
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