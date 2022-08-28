import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private pno = 0;
  private productList = [];
  @ViewChild('myInfiniteScroll', { static: false }) //注意 這邊已被ngIf變為動態元素
  private myInfiniteScroll: IonInfiniteScroll;
  private hasMore = true; //初始還有更多數據可供加載

  constructor(
    private nav: NavController,
    private http: HttpClient,
    private url: UrlService
  ) {}

  ngOnInit() {
    //組件初始化完成後第一次加載數據
    this.loadData();
  }
  //加載下一頁商品數據
  loadData() {
    this.pno++;
    this.http.get(this.url.productListApi + this.pno).subscribe((res: any) => {
      // console.log(res);
      if (this.pno >= res.pageCount) {
        this.hasMore = false; //如果當前頁號大於等於總頁數
      }
      this.productList = this.productList.concat(res.data);
      this.myInfiniteScroll.complete();
    });
  }

  goBack() {
    //返回歷史紀錄中的上一個頁面
    // this.nav.navigateBack();
    this.nav.back();
  }
}
