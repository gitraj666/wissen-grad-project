import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingCalender2Component } from './upcoming-calender2.component';

describe('UpcomingCalender2Component', () => {
  let component: UpcomingCalender2Component;
  let fixture: ComponentFixture<UpcomingCalender2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCalender2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingCalender2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
