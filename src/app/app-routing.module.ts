import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { InterviewerFormComponent } from './interviewer-form/interviewer-form.component';
import { UpcomingInterviewComponent } from './upcoming-interview/upcoming-interview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'addPreferences', component: InterviewerFormComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'upcomingInterview', component: UpcomingInterviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
