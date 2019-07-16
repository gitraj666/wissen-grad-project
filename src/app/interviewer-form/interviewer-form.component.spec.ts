import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerFormComponent } from './interviewer-form.component';

describe('InterviewerFormComponent', () => {
  let component: InterviewerFormComponent;
  let fixture: ComponentFixture<InterviewerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
