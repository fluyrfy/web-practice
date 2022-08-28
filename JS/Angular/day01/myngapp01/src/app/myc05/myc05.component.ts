import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component {
  //MVVM: Model
  uname = 'ding dang';
  age = 20;
  quantity = 3;
  style1 = "display:block;"

  printUname() {
    console.log(this.age);
  }
  minus() {
    this.quantity--;
    if (this.quantity == 0) {
      this.style1 = "display:none;";
    }
  }
  plus() {
    this.quantity++;
  }
}
