import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';  

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year:number = 2021;
  month:number = 11;
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  day:number = 30;
  selectDate:any;

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);  
    const subscribe = source.subscribe((val: any) => this.myTimer());  
  }

  myTimer() {
    this.currentDate = new Date();
    const targetNewDate = new Date(this.selectDate);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = targetNewDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    // const source = interval(1000);  
    // const subscribe = source.subscribe((val: any) => this.myTimer());  
    // setInterval(this.myTimer, 1000);
    console.log(this.days, this.hours, this.minutes, this.seconds);

    // document.getElementById("days").innerText = this.days;
    // document.getElementById("hours").innerText = this.hours;
    // document.getElementById("mins").innerText = this.minutes;
    // document.getElementById("seconds").innerText = this.seconds;
  }

}