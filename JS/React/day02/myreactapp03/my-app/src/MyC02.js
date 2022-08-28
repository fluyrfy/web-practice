<<<<<<< HEAD
import React from "react";
// ES6模塊中 this 默認為 undefined

export default class MyC02 extends React.Component {
  age = 20;
  constructor() {
    super(); // 調用父類/超類構造方法, ang ts會自動加上 但js不會
    // 構造方法永遠會在其他方法之前調用
    this.f4 = this.f4.bind(this);
  }
  f2() {
    console.log("按鈕被點擊...");
    console.log(this.age);
  }
  // f3(){}、f3=function(){}會造成this轉移 箭頭函數則不會
  f3 = () => {
    console.log("f3函數觸發...");
  };
  f4() {
    // bind()作用: 綁定/固定this的指向
    console.log(this);
  }

  render() {
    return (
      <div>
        {/* react中的事件句柄不同於HTML的事件句柄(handler) */}
        {/* react or js中事件綁定不能加(), 加了會立即調用*/}
        {/* 當函數被引用時, this將不再指向原類別對象, 而是指向新的事件句柄, 而是指向當前模塊中的全局對象 */}
        {/* JSX中, 事件處理方法賦值時不是函數調用, 而是函數引用 */}
        {/* 但函數加()給的會是函數的返回值, 解決辦法: 將引用的函數包裝成匿名函數 */}
        {/* 普通js中指向button, 模塊中指向window */}
        <button
          type=""
          onClick={() => {
            this.f2();
          }}
        >
          事件綁定
        </button>
        <button type="" onClick={this.f4}>
          手冊官方使用bind綁定this
        </button>
      </div>
    );
  }
}
=======
import React from "react";
// ES6模塊中 this 默認為 undefined

export default class MyC02 extends React.Component {
  age = 20;
  constructor() {
    super(); // 調用父類/超類構造方法, ang ts會自動加上 但js不會
    // 構造方法永遠會在其他方法之前調用
    this.f4 = this.f4.bind(this);
  }
  f2() {
    console.log("按鈕被點擊...");
    console.log(this.age);
  }
  // f3(){}、f3=function(){}會造成this轉移 箭頭函數則不會
  f3 = () => {
    console.log("f3函數觸發...");
  };
  f4() {
    // bind()作用: 綁定/固定this的指向
    console.log(this);
  }

  render() {
    return (
      <div>
        {/* react中的事件句柄不同於HTML的事件句柄(handler) */}
        {/* react or js中事件綁定不能加(), 加了會立即調用*/}
        {/* 當函數被引用時, this將不再指向原類別對象, 而是指向新的事件句柄, 而是指向當前模塊中的全局對象 */}
        {/* JSX中, 事件處理方法賦值時不是函數調用, 而是函數引用 */}
        {/* 但函數加()給的會是函數的返回值, 解決辦法: 將引用的函數包裝成匿名函數 */}
        {/* 普通js中指向button, 模塊中指向window */}
        <button
          type=""
          onClick={() => {
            this.f2();
          }}
        >
          事件綁定
        </button>
        <button type="" onClick={this.f4}>
          手冊官方使用bind綁定this
        </button>
      </div>
    );
  }
}
>>>>>>> 5bdc84dd5ad320152935e4fedc4d67af63a9e326
