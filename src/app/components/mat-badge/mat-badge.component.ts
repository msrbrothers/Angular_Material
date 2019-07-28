import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-badge',
  templateUrl: './mat-badge.component.html',
  styleUrls: ['./mat-badge.component.css']
})
export class MatBadgeComponent implements OnInit {
  notification: number = 10;
  showSpinner: boolean = false;
  badge: boolean = false;
  spinner: boolean = false;
  stepper: boolean = false;
  constructor() { }


  loadSpinnet() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
  ngOnInit() {
  }

  stepperOpen() {
    this.badge = false;
    this.spinner = false;
    this.stepper = true;
  }
  spinnerOpen() {
    this.badge = false;
    this.spinner = true;
    this.stepper = false
  }
  badgeOpen() {
    this.badge = true;
    this.spinner = false;
    this.stepper = false
  }
}
