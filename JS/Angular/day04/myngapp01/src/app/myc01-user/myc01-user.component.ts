import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';


@Component({
  selector: 'app-myc01-user',
  templateUrl: './myc01-user.component.html',
  styleUrls: ['./myc01-user.component.css']
})
export class Myc01UserComponent implements OnInit {
  // timer: any;
  constructor(private timer: TimerService) { //若沒有訪問修飾符則視為普通形參不具備聲明屬性性質
    // this.timer = timer;
  }

  signin() {
    //計時功能不寫在組件中，組件只存放與用戶交互之功能，且代碼盡量符合DRY原則，將此功能剝離出去為一個對象
    // let start = new Date().getTime();
    this.timer.start();
    console.log('開始向服務器提交登入信息...');
    console.log('服務器返回響應消息: 登入成功');
    this.timer.end('登入');
    // let end = new Date().getTime();
    // console.log('登入功能耗時: ', end - start);
  }
  signup() {
    this.timer.start();
    console.log('開始向服務器提交註冊信息...');
    console.log('服務器返回響應消息: 註冊成功');
    this.timer.end('註冊');
  }

  ngOnInit(): void {
  }

}
