import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }//注入router服務

  ngOnInit(): void {
  }
  jump(): void {
    //跳轉到商品詳情-需要路由器服務"$router"
    this.router.navigateByUrl('/plist');
  }
}
