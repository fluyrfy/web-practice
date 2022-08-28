import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //聲明依賴: 讀取參數需要"當前的路由"服務對象
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {  //要拿參數需在這裡拿，組件初始化完成掛到DOM樹上時
    this.route.params.subscribe((res) => {
      console.log(res);
    })
  }

}
