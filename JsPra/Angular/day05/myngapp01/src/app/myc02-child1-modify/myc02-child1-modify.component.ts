import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myc02-child1-modify',
  templateUrl: './myc02-child1-modify.component.html',
  styleUrls: ['./myc02-child1-modify.component.css']
})
export class Myc02Child1ModifyComponent implements OnInit {
  public userInput: string = '';
  // 孩子透過事件發射器將數據發射給父組件
  @Output() //輸出型屬性
  private cryEvent = new EventEmitter();

  doModify() {
    // console.log(this.userInput);
    // 子組件此時想發射數據給父組件
    this.cryEvent.emit(this.userInput);
    this.userInput = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
