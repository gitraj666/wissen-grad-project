import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  empForm = this.fb.group({
    name: ['', Validators.required],
    phNo: [''],
    email: ['', Validators.required],
    wissenId: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.empForm);
    const { name, phNo, email, wissenId } = this.empForm.value;
    const emp = new Employee(name, phNo, email, wissenId);
    this.empService.addEmployee(emp)
      .subscribe((e) => {
        console.log('added');
      });
  }

}

