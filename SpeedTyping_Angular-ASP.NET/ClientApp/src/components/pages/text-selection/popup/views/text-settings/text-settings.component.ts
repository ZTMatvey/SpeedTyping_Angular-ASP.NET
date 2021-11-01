import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from 'src/components/pages/services/text.service';
import { ThemesDataService } from 'src/themes/themes-data.service';

@Component({
  selector: 'st-text-selection-settings',
  templateUrl: './text-settings.component.html',
  styleUrls: ['./text-settings.component.scss']
})
export class TextSettingsComponent implements OnInit, AfterViewInit {
  text?: TextService;
  slider: HTMLInputElement | undefined;
  private fullTextLength: number = 0;
  currentTextModeLength: number = 0;
  currentTextModeName: string = "";
  private textTypes?: HTMLCollectionOf<Element>;
  private lastElement?: HTMLElement;
  private typeId = 1;

  constructor(readonly themesData: ThemesDataService, private router: Router) { }

  ngOnInit(): void {
    this.slider = <HTMLInputElement>document.getElementById("popup-slider");
  }
  
  ngAfterViewInit(){
    let typesBlock = document.getElementById("text-types");
    this.textTypes = typesBlock?.getElementsByClassName("text-type-element");
    if(this.textTypes && this.textTypes.length > 0)
    {
      let length = this.textTypes.length;
      let flexSizeInPercents = 100 / length;
      let defaultSelected = this.textTypes[0] as HTMLElement;
      defaultSelected.click();
      for(let i = 0; i < length; i++)
      {
        let child = this.textTypes[i] as HTMLElement;
        child.style.flex = `0 0 ${flexSizeInPercents}%`;
      }
    }
  }
  selectType(element: HTMLElement, typeId: number){
    if(element === this.lastElement)
      return;
    this.typeId = typeId;    
    element.classList.add("text-type-element-selected");
    this.lastElement?.classList.remove("text-type-element-selected");
    this.lastElement = element;
  }
  selectTypeBtnClicked(event: any, typeId: number){
    
    let target = event.target as HTMLElement;
    this.selectType(target, typeId);
  }
  textChoosed() {     
    this.router.navigate(['text-write'], 
    {
        queryParams:{
          "textId": this.text?.id,
          "textSizeId": this.slider?.value ?? '5',
          "actionTypeId": this.typeId
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
