import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor(private http: HttpClient) { }

  addInterviewer(interviewer) {
    const api = 'http://localhost:9000/api/employees/interviewer';
    return this.http.post(api, interviewer);
  }

}
