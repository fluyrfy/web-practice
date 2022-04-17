import { Component } from '@angular/core';

//組件=模板+腳本+樣式

//裝飾器(Decorator)-用於指定class用途
@Component({
  template:'<h2>我的組件C01</h2><hr>',
  selector:'myc01'//當元素用，若當屬性用則[myc01]
})
export class MyC01Component {

}

//Ang組件必須放在模塊(module)中
