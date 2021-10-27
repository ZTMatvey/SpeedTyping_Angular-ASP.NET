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
export class TextSelectionComponent implements OnInit {
  @ViewChild("popup", {static: false})
  popup: PopupComponent | undefined;
  Texts?: TextService[];

  constructor(private textsService: TextsService) { }
  ngOnInit(){
    this.Texts = this.textsService.Texts;
  }
  openPopup(id: number)
  {
    let text = this.Texts?.find(i => i.id === id)!;
    this.popup?.openPopup(text);
  }
}