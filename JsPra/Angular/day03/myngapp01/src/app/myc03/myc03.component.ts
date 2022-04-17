import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css']
})
export class Myc03Component implements OnInit {
  //組件: 服務使用者，必須聲明依賴
  log;
  constructor(log: LogService) {  //聲明依賴
    console.log("服務誕生了");
    console.log(log);
    this.log = log;
  }
  doAdd() {
    console.log('正在添加商品');
    let action = '添加新商品: xxxxx';
    this.log.doLog(action);
  }
  doDelete() {
    console.log('正在刪除商品');
    let action = '刪除已有商品: xxxxx';
    this.log.doLog(action);
  }


  ngOnInit(): void {
  }

}
