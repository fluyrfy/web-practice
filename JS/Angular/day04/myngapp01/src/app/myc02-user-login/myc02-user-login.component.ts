import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-login',
  templateUrl: './myc02-user-login.component.html',
  styleUrls: ['./myc02-user-login.component.css'],
  providers: [TimerService]
})
export class Myc02UserLoginComponent implements OnInit {
  timer: any;
  constructor(timer: TimerService) {
    this.timer = timer;
  }

  doLogin() {
    this.timer.start();
    console.log('開始向服務器提交登入信息...');
    console.log('服務器返回響應消息: 登入成功');
    this.timer.end('登入');
  }
  ngOnInit(): void {
  }

}
