import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable() //服務內有參數，每個組件調用時須使用新服務，聲明提供者的注入方法不適用
export class TimerService {
  startTime: any; //操作開始時間
  endTime: any; //操作結束時間
  constructor() {
    console.log('一個TimerService對象被創建');
  }
  start() {
    this.startTime = new Date().getTime();
  }
  end(actionName: string) {
    this.endTime = new Date().getTime();
    console.log(actionName + '操作耗時:', this.endTime - this.startTime)
  }
}
