import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-text-write-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  minutes: number = 0;
  seconds: number = 0;
  miliseconds: number = 0;
  timePassed: number = 0;
  timePassedTotal: number = 0;
  interval?: any;

  startTimer()
  {
    this.interval = setInterval(() => {
      this.timePassed++;
      this.timePassedTotal++;
      this.seconds = Math.trunc(this.timePassed / 100);
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
        this.timePassed = 0;
      }
      this.miliseconds = this.timePassed % 100;
    }, 10);
  }
  stopTimer()
  {
    clearInterval(this.interval);
  }
  get time(){
    return this.timePassedTotal * 10;
  }
}
