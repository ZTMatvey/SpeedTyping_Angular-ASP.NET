import { Component, OnInit, ViewChild } from '@angular/core';
import { TextSelectionFilters } from 'src/components/pages/services/text-selection-filters';

@Component({
  selector: 'st-text-selection-properties',
  templateUrl: './text-selection-properties.component.html',
  styleUrls: ['./text-selection-properties.component.scss']
})
export class TextSelectionPropertiesComponent implements OnInit {
  slider?: HTMLInputElement;
  minContentLength: number = 0;
  sliderValueChanged(){
    let minContentLength = parseInt(this.slider!.value) * 100;
    this.minContentLength = minContentLength;
    TextSelectionFilters.minContentLength = minContentLength;
  }
  languageChanged(event: any){
    TextSelectionFilters.languageId = event.target.value;
  }
  updateTexts() {
    TextSelectionFilters.filtersChanged.emit();
  }
  ngOnInit(): void {
    this.slider = <HTMLInputElement>document.getElementById("slider");
  }
}
