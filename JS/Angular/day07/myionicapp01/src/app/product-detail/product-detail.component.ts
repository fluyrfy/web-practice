import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ImgUrlPipe } from '../img-url.pipe';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  //router: 路由器,用於路由跳轉  route: 路由,表示當前激活的路由對象,用於讀取地址參數
  private product = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private url: UrlService,
    private nav: NavController
  ) {}

  ngOnInit() {
    //組件初始化完成後，讀取當前路由地址中的參數_要查詢的商品編號
    this.route.params.subscribe((res) => {
      // console.log(res);
      let pid = parseInt(res.pid);
      this.http.get(this.url.productDetailApi + pid).subscribe((res: any) => {
        // console.log(res);
        this.product = res.details;
        // console.log(this.product);
      });
    });
  }

  goBack() {
    //返回歷史紀錄中的上一個頁面
    // this.nav.navigateBack();
    this.nav.back();
  }
}
