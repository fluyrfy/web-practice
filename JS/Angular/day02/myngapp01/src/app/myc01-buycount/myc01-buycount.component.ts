import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01-buycount',
  templateUrl: './myc01-buycount.component.html',
  styleUrls: ['./myc01-buycount.component.css']
})
export class Myc01BuycountComponent {
  count = 3;
  show = "display:block";
  imgUrl = '1.jpg';

  minus() {
    this.count--;
    if (this.count == 0) {
      this.show = "display:none";
    }
  }
  plus() {
    this.count++;
  }
}
