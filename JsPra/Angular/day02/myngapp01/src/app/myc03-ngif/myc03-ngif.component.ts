import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-ngif',
  templateUrl: './myc03-ngif.component.html',
  styleUrls: ['./myc03-ngif.component.css']
})
export class Myc03NgifComponent {
  isPaidUser = false;
  paid() {
    this.isPaidUser = true;
  }
}
