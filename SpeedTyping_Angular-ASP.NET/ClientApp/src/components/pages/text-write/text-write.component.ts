import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { TextService } from '../services/text.service';
import { TextsService } from '../services/texts.service';
import { CpmMeterComponent } from './cpm-meter/cpm-meter.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-text-write',
  templateUrl: './text-write.component.html',
  styleUrls: ['./text-write.component.scss']
})
export class TextWriteComponent implements AfterViewInit, OnInit {
  @ViewChild("wrapper", {static: false})
  wrapper: ElementRef | undefined;
  @ViewChild("timer", {static: false})
  timer: TimerComponent | undefined;
  @ViewChild("cpmMeter", {static: false})
  cpmMeter: CpmMeterComponent | undefined;
  @ViewChild("textBox", {static: false})
  textBox: TextBoxComponent | undefined;
  currentLine: string = "";
  text?: TextService;

  constructor(
    readonly themesData: ThemesDataService, 
    readonly route: ActivatedRoute,
    readonly textsService: TextsService,
    readonly router: Router) {
  }
  lineChanged(newLine: any){
    this.currentLine = newLine;
  } 
  textChangedFirst(){
    this.timer?.startTimer();
    this.cpmMeter?.startCpmMeter(); 
  }
  newCorrectCharacter() {
    this.cpmMeter?.addCorrect();
  }
  stopAll()
  {
    this.timer?.stopTimer(); 
    this.cpmMeter?.stopCpmMeter();
    this.cpmMeter?.hideCpmMeter();
  }
  setupText() {
    let textId;
    this.route.queryParams.subscribe((params: any)=>{
      textId = params["textId"];
    });
    if(textId)
    {
      this.text = this.textsService.getTextById(textId);       
      if(this.text)
        return;
    }
    this.toHomePage();
  }
  toHomePage(){
    this.router.navigate([""]);
  }
  ngOnInit(){
    this.setupText();
  }
  ngAfterViewInit() {
    this.wrapper?.nativeElement.style.setProperty("--bg-color", this.themesData.bgColor);
    this.wrapper?.nativeElement.style.setProperty("--text-color", this.themesData.textColor);
    this.wrapper?.nativeElement.style.setProperty("--sub-text-color", this.themesData.subBgColor);
  }
}
