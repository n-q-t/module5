import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  number: number = 11;
  private interval = 0;

  constructor() {
  }

  ngOnInit() {
  }

  loading() {
    // @ts-ignore
    this.interval = setInterval(() => {
      this.number = +this.number - 1;
      if (this.number <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  reset() {
    this.number = 11;
  }

  pause() {
    clearInterval(this.interval)
  }

}
