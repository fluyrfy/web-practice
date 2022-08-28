import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc08-ngmodel',
  templateUrl: './myc08-ngmodel.component.html',
  styleUrls: ['./myc08-ngmodel.component.css']
})
export class Myc08NgmodelComponent {
  uname = "";
  msg = '密碼長度在6~12位之間';
  upwd = '';
  spanClass = {
    succ: false,
    fail: false
  }
  doUnameChange() { //想監聽模型數據改變,可綁定(ngModelChange)代替 onIput
    console.log(this.uname);
  }
  doUpwdChange(){
    console.log(this.upwd);
    if (this.upwd.length < 6) {
      this.msg = "密碼太短了";
      this.spanClass['fail'] = true;
    }else if (this.upwd.length > 12) {
      this.msg = "密碼太長了";
      this.spanClass['fail'] = true;
    }else {
      this.msg = "密碼長度合法"
      this.spanClass['succ'] = true;
      this.spanClass['fail'] = false;
    }
  }
}
