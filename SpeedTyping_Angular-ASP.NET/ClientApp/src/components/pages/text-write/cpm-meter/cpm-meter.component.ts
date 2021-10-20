import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'st-text-write-cpm-meter',
  templateUrl: './cpm-meter.component.html',
  styleUrls: ['./cpm-meter.component.scss']
})
export class CpmMeterComponent {
  @ViewChild("cpmMeter", { static: false })
  cpmMeter?: ElementRef;
  private cpmInterval: any;
  private correctInLastPartOfTime: number = 0;
  private currentIndex: number = 0;
  private partOfTimeCorrects: number[] = [];
  private readonly countOfMeterings: number = 2 * 8;
  currentCPM: number = 0;

  constructor() { }

  startCpmMeter()
  {
    this.cpmInterval = setInterval(() => {
      if(this.currentIndex >= this.countOfMeterings)
        this.currentIndex = 0;
      this.partOfTimeCorrects[this.currentIndex++] = this.correctInLastPartOfTime;
      this.correctInLastPartOfTime = 0;
      this.currentCPM = this.partOfTimeCorrects.reduce((a, b) => a + b, 0) * 30;
    }, 125);
  }
  stopCpmMeter() {
    clearInterval(this.cpmInterval);
    this.currentCPM = 0;
  }
  addCorrect() {
    this.correctInLastPartOfTime++;
  }
  hideCpmMeter(){
    this.cpmMeter!.nativeElement.style.display = "none";
  }
}
