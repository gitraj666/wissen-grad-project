import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingSchedulesComponent } from './upcoming-schedules.component';

describe('UpcomingSchedulesComponent', () => {
  let component: UpcomingSchedulesComponent;
  let fixture: ComponentFixture<UpcomingSchedulesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
