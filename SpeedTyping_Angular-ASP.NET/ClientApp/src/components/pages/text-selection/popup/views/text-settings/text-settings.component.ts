import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from 'src/components/pages/services/text.service';
import { ThemesDataService } from 'src/themes/themes-data.service';

@Component({
  selector: 'st-text-selection-settings',
  templateUrl: './text-settings.component.html',
  styleUrls: ['./text-settings.component.scss']
})
export class TextSettingsComponent implements OnInit {
  text?: TextService;
  slider: HTMLInputElement | undefined;
  private fullTextLength: number = 0;
  currentTextModeLength: number = 0;
  currentTextModeName: string = "";

  constructor(readonly themesData: ThemesDataService, private router: Router) { }

  ngOnInit(): void {
    this.slider = <HTMLInputElement>document.getElementById("popup-slider");
  }
  textChoosed() {    
    this.router.navigate(['text-write'], 
    {
        queryParams:{
            "textId": this.text?.id
        }
    });
  }
  configureTextData(text: TextService)
  {
    this.text = text;
    
    this.fullTextLength = this.text?.content.length || 0;
    this.updateSize();
  }
  updateSize()
  {
    if(this.slider === undefined)
      return;
    switch (this.slider.value) {
        case '1':
            this.currentTextModeLength = 50;
            this.currentTextModeName = "ultra short";
            break;
        case '2':
            this.currentTextModeLength = Math.floor(this.fullTextLength * .25);
            this.currentTextModeName = "short (25%)";
            break;
        case '3':
          this.currentTextModeLength = Math.floor(this.fullTextLength * .5);
          this.currentTextModeName = "medium (50%)";
            break;
        case '4':
            this.currentTextModeLength = Math.floor(this.fullTextLength * .75);
            this.currentTextModeName = "large (75%)";
            break;
        case '5':
            this.currentTextModeLength = this.fullTextLength;
            this.currentTextModeName = "full (100%)";
            break;
    }
  }

}
