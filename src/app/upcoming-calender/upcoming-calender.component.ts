import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-calender',
  template: `
    <div [ngStyle]="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <nz-calendar
        nzCard
        (nzSelectChange)="onValueChange($event)"
        (nzPanelChange)="onPanelChange($event)"
      ></nz-calendar>
    </div>
  `
})
export class UpcomingCalenderComponent {
  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }
}
