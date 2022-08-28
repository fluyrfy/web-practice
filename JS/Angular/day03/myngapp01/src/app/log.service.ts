import { Injectable } from "@angular/core";
//所有的服務對象都是"可被注入的"
@Injectable({
  providedIn: 'root', //指定當前服務對象在"根模塊"中提供，相當於在根模塊中宣稱
})
export class LogService {
  doLog(action: String) {
    let uname = 'admin';
    let time = new Date().getTime();
    console.log(`管理員: ${uname} 時間: ${time} 動作: ${action}`)
  }
}
