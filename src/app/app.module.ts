import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InterviewerFormComponent } from './interviewer-form/interviewer-form.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { UpcomingInterviewComponent } from './upcoming-interview/upcoming-interview.component';
import { UpcomingCalenderComponent } from './upcoming-calender/upcoming-calender.component';
import { UpcomingCalender2Component } from './upcoming-calender2/upcoming-calender2.component';
import { UpcomingSchedulesComponent } from './upcoming-schedules/upcoming-schedules.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeFormComponent,
    NavbarComponent,
    ScheduleComponent,
    InterviewerFormComponent,
    UpcomingInterviewComponent,
    UpcomingCalenderComponent,
    UpcomingCalender2Component,
    UpcomingSchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularDateTimePickerModule,
    FullCalendarModule,
    NgZorroAntdModule
  ],
  providers: [MatDatepickerModule, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
