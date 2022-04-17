import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.css']
})
export class Myc06StyleComponent {
  //待綁定樣式對象
  // myStyleObj = { backgroundColor: '#383', color: '#fff', borderColor: '#252' } //可用單引號或駝峰式
  // 須具備可維護性與低耦合 不推薦在腳本內容中寫樣式
  myClassObj = {
    btn: true,
    'btn-success': true, // 烤串法則
    'btn-danger': false  // class名無法自動將駝峰轉換為槓槓
  }
  loadMore() {
    // // 修改物件屬性值兩種寫法
    // this.myStyleObj.backgroundColor = '#833'; // 不可加槓槓
    // this.myStyleObj['borderColor'] = '#522'; // 可以加槓槓
  }
  loadMore2() { // 因為上面無法用駝峰 修改屬性方法只能用[]
    this.myClassObj['btn-danger'] = true;
    this.myClassObj['btn-success'] = false;
  }
}
