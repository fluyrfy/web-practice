import { Directive, ElementRef } from '@angular/core';
//原生三種指令: 組件、結構型指令(*)、屬性型指令([])
// 自定義指令
@Directive({
  selector: '[appXuYaoQiangDiao]'
})
export class XuYaoQiangDiaoDirective {
  //構造方法
  //ts語法 變量:變量類型 Ex: age:number
  constructor(el: ElementRef) {
    console.log(el);
    console.log(el.nativeElement)
    el.nativeElement.style.backgroundColor = '#fcc'
  }
}
