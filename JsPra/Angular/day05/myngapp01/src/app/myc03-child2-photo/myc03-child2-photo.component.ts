import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-child2-photo',
  templateUrl: './myc03-child2-photo.component.html',
  styleUrls: ['./myc03-child2-photo.component.css']
})
export class Myc03Child2PhotoComponent implements OnInit {
  // public child2Name:string = ''; //此為普通屬性，不能被父組件傳值
  // 須為輸入型屬性: 父組件可以利用這種屬性傳值進來
  @Input()  // 裝飾器與屬性之間不能有任何東西
  public child2Name:string = '';

  constructor() { }

  ngOnInit(): void {
  }
 
}
