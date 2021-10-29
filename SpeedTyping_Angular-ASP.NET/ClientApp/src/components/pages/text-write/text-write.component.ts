import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { TextService } from '../services/text.service';
import { TextsService } from '../services/texts.service';
import { TextWriteInfo } from '../text-write-result/text-write-info';
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
  textWriteInfo: TextWriteInfo;

  constructor(
    readonly themesData: ThemesDataService, 
    readonly route: ActivatedRoute,
    readonly textsService: TextsService,
    readonly router: Router) {
      this.textWriteInfo = new TextWriteInfo();
  }
  lineChanged(newLine: any){
    this.currentLine = newLine;
  } 
  textChangedFirst(){
    this.timer?.startTimer();
    this.cpmMeter?.startCpmMeter(); 
  }
  newCorrectCharacter() {
    this.textWriteInfo.countOfCorrects++;
    this.cpmMeter?.addCorrect();
  }
  error(){
    this.textWriteInfo.countOfErrors++;
  }
  stopAll()
  {
    this.textWriteInfo.miliseconds = this.timer?.time ?? 0;
    this.timer?.stopTimer(); 
    this.cpmMeter?.stopCpmMeter();
    this.cpmMeter?.hideCpmMeter();
    this.router.navigateByUrl("/text-write-result");
  }
  setupText() {
    let textId;
    this.route.queryParams.subscribe((params: any)=>{
      textId = params["textId"];
    });
    if(textId)
    {
      this.textsService.getTextById(textId).then((text)=> this.checkText(text));
    }
  }
  checkText(text: TextService | null) {
    let textIsValid = 
    text !== null && text !== undefined &&
    text.content !== null && text.content !== undefined &&
    text.title !== null && text.title !== undefined &&
    text.id !== null && text.id !== undefined;
    if(textIsValid)
    {
      let textSizeId;
      let actionTypeId;
      this.route.queryParams.subscribe((params: any)=>{
        textSizeId = params["textSizeId"];
        actionTypeId = params["actionTypeId"];
      });
      textSizeId = textSizeId === null || textSizeId === undefined ? '5' : textSizeId;
      actionTypeId = actionTypeId === null || actionTypeId === undefined ? '1' : actionTypeId;
      this.configureText(text!, parseInt(textSizeId!));
      this.textBox?.setupText(text!, parseInt(actionTypeId));
    }
    else
      this.toHomePage();
  }
  configureText(text: TextService, textSizeId: number) {
    this.text = text!;
    this.text.textSizeId = textSizeId;
    this.textWriteInfo.textId = this.text!.id;
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
