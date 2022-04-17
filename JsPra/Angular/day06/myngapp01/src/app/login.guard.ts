import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable({   // 路由守衛都是"可注入"的服務對象
  providedIn: 'root'
})

export class LoginGuard implements CanActivate{
  private isLogin = false;
  constructor(private router: Router) {

  }
  canActivate() {
    // return true: 可以激活後續的組件
    // return false: 阻止激活後續的組件
    if (this.isLogin) {
      return true; //可以激活後續的組件
    }else {
      // 可以選擇執行頁面跳轉
      return false; // 阻止激活後續的組件
      this.router.navigateByUrl('/index');
    }
  }
}
