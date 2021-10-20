import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.components.scss']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild("wrapper", { static: false })
  wrapper: ElementRef | undefined;

  bgColor: string;
  textColor: string;

  constructor(readonly themesData: ThemesDataService) { 
    this.bgColor = themesData?.subBgColor || "#ccc";
    this.textColor = themesData?.textColor || "#333";
  }

  ngAfterViewInit(){
    if(this.wrapper === undefined)
        return;
    this.wrapper.nativeElement.style.setProperty("--bg-color", this.bgColor);
    this.wrapper.nativeElement.style.setProperty("--text-color", this.textColor);
  }
}
