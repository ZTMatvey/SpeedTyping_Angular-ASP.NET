import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemesDataService } from 'src/themes/themes-data.service';
import { TextService } from '../services/text.service';
import { CpmMeterComponent } from './cpm-meter/cpm-meter.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-text-write',
  templateUrl: './text-write.component.html',
  styleUrls: ['./text-write.component.scss']
})
export class TextWriteComponent implements AfterViewInit {
  @ViewChild("wrapper", {static: false})
  wrapper: ElementRef | undefined;
  @ViewChild("timer", {static: false})
  timer: TimerComponent | undefined;
  @ViewChild("cpmMeter", {static: false})
  cpmMeter: CpmMeterComponent | undefined;
  currentLine: string = "123";

  constructor(readonly themesData: ThemesDataService) {
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
  ngAfterViewInit()
  {
    this.wrapper?.nativeElement.style.setProperty("--bg-color", this.themesData.bgColor);
    this.wrapper?.nativeElement.style.setProperty("--text-color", this.themesData.textColor);
    this.wrapper?.nativeElement.style.setProperty("--sub-text-color", this.themesData.subBgColor);
  }
}
