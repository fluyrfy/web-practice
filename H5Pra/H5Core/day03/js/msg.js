//msg.js 完成彈幕功能文件

//1.創建彈幕構造函數,保存彈幕數據
var msgObj=function () {
  //1.1彈幕中顯示文字
  this.m=[];
  //1.2彈幕座標X
  this.x=[];
  //1.3彈幕座標Y
  this.y=[];
  //1.4彈幕移動速度
  this.spd=[];
  //1.5彈幕文字大小
  this.font=[];
  //1.6彈幕中文字顏色
  this.color=[];
  //1.7彈幕狀態 true顯示 false隱藏
  this.alive=[];
}
msgObj.prototype.num=100;
//2.為構造函數添加方法init,初始賦值
msgObj.prototype.init=function () {
  //為以上數值進行賦值
  //2.1創建循環遍歷數組中元素
  for(var i=0;i<this.num;i++){
    //2.2初始化X 在畫布最右側 1280
    this.x[i]=canWidth;
    //2.3初始化Y 100
    this.y[i]=0;
    //2.4初始化m ""
    this.m[i]="";
    //2.5初始化font 12px
    this.font[i]="12px"
    //2.6初始化color #000
    this.color[i]="#000"
    //2.7初始化spd 3
    this.spd[i]=3;
    //2.8初始化alive true
    this.alive[i]=false;
  }
  console.log(this.x);
}
//3.為構造函數添加方法draw,將數據繪製網頁中
msgObj.prototype.draw=function () {
  //3.0清除畫布
  ctx.clearRect(0,0,canWidth,canHeight)
  //3.1創建循環遍歷所有彈幕
  for(var i=0;i<this.num;i++){
    //3.2判斷alive==true 繪製
    if(this.alive[i]){
      //3.3獲取當前彈幕內容 m
      var m=this.m[i];
      //3.4獲取當前彈幕顏色
      var c=this.color[i];
      //3.5獲取當前彈幕文字大小
      var f=this.font[i];
      //3.6獲取當前彈幕速度 (3)
      var spd=this.spd[i];
      //3.7修改當前彈幕 (X-=3)
      this.x[i]-=spd;
      //3.8修改當前彈幕文字大小
      ctx.font=f+" SimHei";
      //3.9修改當前彈幕顏色
      ctx.fillStyle=c;
      //3.10繪製實心文字
      ctx.fillText(m,this.x[i],this.y[i]);
      //3.11判斷彈幕中文字是否移動初屏幕
      if(this.x[i]<0){
        //3.12修改狀態
        this.alive[i]=false;
        //3.13修改x
        this.x[i]=canWidth;
      }
    }

  }


}

//index.html用戶輸入內容，如果用戶點擊發送按鈕
//將文字/顏色/文字
//將內容顯示畫布

//接收三個數據(文字/顏色/大小) 666 red 22px
//4.為構造函數添加方法add,將新彈幕添加彈幕池中
msgObj.prototype.add=function (m) {
  //功能：挑選一個狀態為false的彈幕，將文字內容大小，顏色賦值
  //1.創建循環遍歷數組元素
  for(var i=0;i<this.num;i++){
    //2.查找到第一個為false元素
    if(this.alive[i]==false){
      //3.將修改狀態true
      this.alive[i]=true;
      //4.分配文字大小
      this.font[i]=m.font;
      //5.分配文字顏色
      this.color[i]=m.color;
      //6.重新分配Y
      this.y[i]=Math.random()*canHeight;
      //7.分配隨機速度
      this.spd[i]=1+Math.random()*3;
      //8.分配顯示文字
      this.m[i]=m.msg;
      //9.return 一次挑一個
      return;
    }
  }
}
//5.
