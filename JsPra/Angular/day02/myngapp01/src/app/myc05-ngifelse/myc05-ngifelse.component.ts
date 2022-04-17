import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05-ngifelse',
  templateUrl: './myc05-ngifelse.component.html',
  styleUrls: ['./myc05-ngifelse.component.css']
})
export class Myc05NgifelseComponent {
  hasMore = true;
  noMore() {
    this.hasMore = false;
  }
}
