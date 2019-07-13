import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
