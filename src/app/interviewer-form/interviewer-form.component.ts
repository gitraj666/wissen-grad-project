import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup } from '@angular/forms';
import { InterviewerService } from '../interviewer.service';

@Component({
  selector: 'app-interviewer-form',
  templateUrl: './interviewer-form.component.html',
  styleUrls: ['./interviewer-form.component.scss']
})
export class InterviewerFormComponent implements OnInit {

  techs = [];
  levels = [];
  interviewerForm = this.fb.group({
    technology: ['', Validators.required],
    level: ['', Validators.required],
    empId: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private interviewerService: InterviewerService) { }

  ngOnInit() {
  }

  keyDownEventTech(event) {
    this.techs = this.interviewerForm.value.technology.split(' ');
    // console.log(this.techs);
  }

  keyDownEventLevel(event) {
    this.levels = this.interviewerForm.value.level.split(' ');
    // console.log(this.techs);
  }

  onSubmit(event) {
    event.preventDefault();
    const empId = this.interviewerForm.value.empId;
    this.interviewerService.addInterviewer({ id: empId, techs: this.techs, levels: this.levels })
      .subscribe(() => {
        this.interviewerForm.reset();
        console.log('interviewer added');
        this.techs = [];
        this.levels = [];
      });
  }
}
