import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  to: Date;
  from: Date;
  constructor() {
  }

  ngOnInit() {
  }

  addEventTo(type, event) {
    this.to = new Date(String(event.value));
    console.log(this.to);
  }
  addEventFrom(type, event) {
    this.from = new Date(String(event.value));
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('submitted');
  }
}
