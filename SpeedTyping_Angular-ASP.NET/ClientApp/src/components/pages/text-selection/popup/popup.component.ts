import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { TextService } from '../../services/text.service';
import { TextSettingsComponent } from './views/text-settings/text-settings.component';

enum PopupView{
  TextSettings,
  TextStatistic
}

@Component({
  selector: 'st-text-select-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild("wrapper", {static: false})
  wrapper: ElementRef | undefined;
  @ViewChild("blur", {static: false})
  blur: ElementRef | undefined;
  @ViewChild("popup", {static: false})
  popup: ElementRef | undefined;
  @ViewChild("textSettings", {static: false})
  textSettings: TextSettingsComponent | undefined;
  popupView?: PopupView = PopupView.TextSettings;
  popupViewType = PopupView;

  text?: TextService;
  
  popupOpened?: boolean = false;

  constructor(readonly themesData: ThemesDataService) {}

  @HostListener('window:keydown', ['$event']) keyEvent(event: KeyboardEvent) {
      if (event.keyCode === 27 && this.popupOpened)
        this.closePopup();
  }

  openPopup(text: TextService){
    this.text = text;
    this.textSettings?.configureTextData(text);
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
