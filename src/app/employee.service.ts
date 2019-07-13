import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(employee) {
    const api = 'http://localhost:9000/api/employees';
    return this.http.post(api, employee);
  }
}
