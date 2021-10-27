import { Component, OnInit } from '@angular/core';
import { TextService } from '../../services/text.service';
import { TextsService } from '../../services/texts.service';

@Component({
  selector: 'st-admin-panel-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['../../text-selection/text-selection.component.scss']
})
export class TextsComponent  {
  texts: TextService[];

  constructor(textsService: TextsService) {
    this.texts = textsService.Texts;
  }

  addText(title: string, content: string, id: number)
  {
    let lengthOfPart = 200;
    let text = new TextService(title, content, id);
    text.partOfContent = text.content.substring(0, lengthOfPart);
    if(text.content.length > lengthOfPart)
      text.partOfContent += "...";
    this.texts.push(text);
  }
}
