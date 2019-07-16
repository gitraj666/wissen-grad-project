import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCalenderComponent } from './upcoming-calender.component';

describe('UpcomingCalenderComponent', () => {
  let component: UpcomingCalenderComponent;
  let fixture: ComponentFixture<UpcomingCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
