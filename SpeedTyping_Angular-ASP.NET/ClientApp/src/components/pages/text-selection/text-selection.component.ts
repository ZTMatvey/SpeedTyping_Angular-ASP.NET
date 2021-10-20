import { Component, OnInit, ViewChild } from '@angular/core';
import { TextService } from '../services/text.service';
import { TextsService } from '../services/texts.service';
import { PopupComponent } from './popup/popup.component';
import { TextCardComponent } from './text-card/text-card.component';

@Component({
  selector: 'app-text-selection',
  templateUrl: './text-selection.component.html',
  styleUrls: ['./text-selection.component.scss']
})
export class TextSelectionComponent {
  @ViewChild("popup", {static: false})
  popup: PopupComponent | undefined;
  Texts: TextService[];

  constructor(textsService: TextsService) {
    this.Texts = textsService.Texts;
  }
  openPopup(id: string)
  {
    let text = this.Texts.find(i => i.id === id)!;
    this.popup?.openPopup(text);
  }
}