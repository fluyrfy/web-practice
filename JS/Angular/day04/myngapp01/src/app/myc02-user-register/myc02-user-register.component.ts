import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-myc02-user-register',
  templateUrl: './myc02-user-register.component.html',
  styleUrls: ['./myc02-user-register.component.css'],
  providers: [TimerService] //僅用於當前組件的服務提供者
})
export class Myc02UserRegisterComponent implements OnInit {
  timer: any;
  constructor(timer: TimerService) {
    this.timer = timer;
  }
  doRegister() {
    this.timer.start();
    console.log('開始向服務器提交註冊信息...');
    console.log('服務器返回響應消息: 註冊成功');
    this.timer.end('註冊');
  }
  ngOnInit(): void {
  }

}
