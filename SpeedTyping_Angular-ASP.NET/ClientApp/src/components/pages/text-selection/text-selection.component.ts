import { Component, OnInit, ViewChild } from '@angular/core';
import { TextSelectionFilters } from '../services/text-selection-filters';
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
    TextSelectionFilters.filtersChanged.subscribe(()=> this.updateTexts());
    this.updateTexts();
  }
  updateTexts(){
    let texts = this.textsService.getTexts().then(res=> {
      this.Texts = [];
      res.forEach(element => {
        let canAdd = TextSelectionFilters.canAdd(element);
        if(canAdd)
          this.Texts!.push(element);
      });
    });
  }
  openPopupForTextSettings(id: number)
  {
    let text = this.Texts?.find(i => i.id === id)!;
    this.popup?.openPopupForTextSettings(text);
  }
  openPopupForSelectProperties() {
    this.popup?.openPopupForSelectionProperties();
  }
}