import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private carouselItems: []; //輪播廣告項
  private newArrivalItems: []; //新品上市項
  private recommendedItems: []; //首頁推薦項
  private topSaleItems: []; //熱銷單品項

  constructor(private url: UrlService, private http: HttpClient) {}

  ngOnInit() {
    //組件初始化完成,異部請求商品數據
    this.http.get(this.url.indexApi).subscribe((res: any) => {
      console.log(res);
      this.carouselItems = res.carouselItems;
      this.newArrivalItems = res.newArrivalItems;
      this.recommendedItems = res.recommendedItems;
      this.topSaleItems = res.topSaleItems;
      //啟動輪播廣告自動撥放
    });
  }
}
