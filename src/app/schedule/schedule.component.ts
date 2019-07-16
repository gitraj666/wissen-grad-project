import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  toDate: Date;
  fromDate: Date;
  toTime: Time;
  fromTime: Time;
  scheduleForm = this.fb.group({
    toTime: ['']
  });
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  addEventTo(type, event) {
    this.toDate = new Date(String(event.value));
    console.log(this.toDate);
  }
  addEventFrom(type, event) {
    this.fromDate = new Date(String(event.value));
  }

  onSubmit(event) {
    event.preventDefault();
    this.toTime = this.scheduleForm.value.toTime;
    this.fromTime = this.scheduleForm.value.fromTime;
    console.log('submitted' + this.toTime);
  }
}
