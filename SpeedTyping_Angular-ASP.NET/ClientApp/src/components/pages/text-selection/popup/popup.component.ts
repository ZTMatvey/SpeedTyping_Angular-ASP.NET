import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { TextService } from '../../services/text.service';
import { TextSettingsComponent } from './views/text-settings/text-settings.component';
import { ViewTypes } from './views/view-types';

@Component({
  selector: 'st-text-select-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild("wrapper")
  wrapper?: ElementRef;
  @ViewChild("blur")
  blur?: ElementRef;
  @ViewChild("popup")
  popup?: ElementRef;
  @ViewChild("textSettings")
  textSettings?: TextSettingsComponent;
  viewType: ViewTypes = ViewTypes.TextSettings;
  text?: TextService;
  
  popupOpened?: boolean = false;

  constructor(readonly themesData: ThemesDataService) {}

  @HostListener('window:keydown', ['$event']) keyEvent(event: KeyboardEvent) {
      if (event.keyCode === 27 && this.popupOpened)
        this.closePopup();
  }

  openPopupForTextSettings(text: TextService){
    this.viewType = ViewTypes.TextSettings;
    this.text = text;
    this.textSettings?.configureTextData(text);
    this.openPopup();
  }
  openPopupForSelectionProperties(){
    this.viewType = ViewTypes.TextSelectProperties;
    this.openPopup();
  }
  private openPopup() {
    this.popupOpened = true;
    this.wrapper?.nativeElement.classList.remove("popup-hidden");
    this.blur?.nativeElement.classList.remove("blur-screen-disactive");
    this.popup?.nativeElement.classList.remove("center-disactive");
    this.blur?.nativeElement.classList.add("blur-screen-active");
    this.popup?.nativeElement.classList.add("center-active");
  }
  closePopup(){
    this.popupOpened = false;
    this.blur?.nativeElement.classList.remove("blur-screen-active");
    this.popup?.nativeElement.classList.remove("center-active");
    this.blur?.nativeElement.classList.add("blur-screen-disactive");
    this.popup?.nativeElement.classList.add("center-disactive");
  }
}
