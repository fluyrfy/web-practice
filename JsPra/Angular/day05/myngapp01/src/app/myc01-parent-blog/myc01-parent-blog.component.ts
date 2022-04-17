import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01-parent-blog',
  templateUrl: './myc01-parent-blog.component.html',
  styleUrls: ['./myc01-parent-blog.component.css']
})
export class Myc01ParentBlogComponent implements OnInit {
  public uname: string = '威猛先生';

  doCry(e: any) {
    console.log(e); //自定義事件發射來的數據
    this.uname = e;
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
