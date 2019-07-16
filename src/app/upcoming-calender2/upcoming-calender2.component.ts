import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-calender2',
  templateUrl: './upcoming-calender2.component.html'
})
export class UpcomingCalender2Component {
  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
}
