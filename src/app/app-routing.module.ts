import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
