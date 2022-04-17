import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productId: number = 0;
  //聲明依賴: 讀取參數需要"當前的路由"服務對象
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {  //要拿參數需在這裡拿，組件初始化完成掛到DOM樹上時
    this.route.params.subscribe((res) => {
      console.log(res);
      this.productId = res.lid;
    })
  }

}
