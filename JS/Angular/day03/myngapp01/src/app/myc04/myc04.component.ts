import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css']
})
export class Myc04Component implements OnInit {

  http: any;
  constructor(http: HttpClient) { //聲明依賴服務對象
    this.http = http;
  }

  loadProduct() {
    let url = 'http://www.codeboy.com:9999/data/product/list.php?pno=2'
    //使用注入進來的HttpClient實例發起異步請求
    this.http.get(url).subscribe((res: any) => {
      console.log('得到訂閱異步消息');
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
