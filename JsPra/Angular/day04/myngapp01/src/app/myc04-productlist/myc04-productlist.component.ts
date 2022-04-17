import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04-productlist',
  templateUrl: './myc04-productlist.component.html',
  styleUrls: ['./myc04-productlist.component.css']
})
export class Myc04ProductlistComponent implements OnInit {
  public productList: any = [];
  private pno: number = 0;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.loadMore();
  }
  public loadMore(): void {
    this.pno++;
    let url: string = '/api/data/product/list.php?pno=' + this.pno;
    this.http.get(url).subscribe((res: any) => {
      console.log(res.data);
      // for (let d of res.data) {
      //   this.productList.push(d);
      // }
      this.productList = this.productList.concat(res.data);
      console.log(this.productList[0].title)
    })
  }
}
