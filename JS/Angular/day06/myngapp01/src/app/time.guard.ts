import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TimeGuard implements CanActivate{
  // 如果當前訪問時間是6~23點則允許激活路由
  canActivate(): boolean {
    let hour = new Date().getHours();
    if (hour >=6 && hour <= 23) {
      return true;
    }else {
      return false;
    }
  }
}
