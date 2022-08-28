//創建食物功能
//創建食物構造函數
var fruitObj = function () {
  //添加食物狀態屬性 alive true顯示 false隱藏
  this.alive = [];
  //創建二個圖片對象
  this.blue = new Image();
  this.orange = new Image();
  //保存位置數組 x, y
  this.x = [];
  this.y = [];
  //保存圖片寬度和高度(寬高一致)
  this.l = [];
  //保存速度 spd 向上漂浮
  this.spd = [];
  //保存食物類型 blue, orange
  this.fruitType = [];
  //保存第幾個海葵
  this.aneNo = [];
}
//為食物構造函數添加屬性 num = 30
fruitObj.prototype.num = 30;
//為食物構造函數添加方法 init
fruitObj.prototype.init = function () {
  for (let i = 0; i < this.num; i++) {
    //給食物狀態位置海葵編號速度類型
    // (測試)
    // this.alive[i] = true;
    // this.x[i] = Math.random() * 800;
    // this.y[i] = Math.random() * 600;
    // this.l[i] = 0;
    // this.fruitType[i] = Math.random() < 0.9 ? "blue" : "orange";
    // this.spd [i] = Math.random() * 0.017
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.fruitType[i] = "";
    this.spd [i] = 0;
  }
  this.blue.src = "src/blue.png";
  this.orange.src = "src/fruit.png";
  console.log(this);
}
//添加方法 draw
fruitObj.prototype.draw = function () {
  //創建循環遍歷每個食物
  for (let i = 0; i < this.num; i++) {
    //判斷當前食物是否活動
    if (this.alive[i]) {
      //判斷當前食物類型
      if (this.fruitType[i] == "blue") {
        var pic = this.blue;
      }else{
        var pic = this.orange;
      }
      //判斷當前食物寬度 <= 14
      if (this.l[i] <= 14) {
        //修改 l
        this.l[i] += this.spd[i] * deltaTime;
      }else {
        //修改 Y
        this.y[i] -= this.spd[i] * deltaTime * 3;
      }
      //繪製食物
      ctx2.drawImage(pic, this.x[i], this.y[i], this.l[i], this.l[i]);
    }
    //當前食物漂浮出屏幕
    if (this.y[i] < 10) {
      //將當前食物狀態修改為隱藏
      this.alive[i] = false;
    }
  }
}
// 將fruit.js添加到index.html
// 在main.js 創建食物對象並調用相關方法
// 監聽畫布上活動(顯示)食物是否有15個
// 不足15個
function fruitMonitor() {
  // 累加狀態為true幾個元素
  var num = 0;
  for (let i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
      num++;
    }
  }
  console.log(num);
  if (num < 15) {
    sendFruit(); // 挑
    return; // 一次挑一個
  }
}
// 挑一個食物: 按下標第一個
function sendFruit() {
  for (let i = 0; i < fruit.num; i++) {
    // 找到第一個食物出生
    if (fruit.alive[i] == false) {
      fruit.born(i); //出生
      return; //一次出生一個
    }
  }
}
// 出生: true; 類型; 海葵; x, y; spd;
fruitObj.prototype.born = function (i) {
  // 獲取幾個海葵下標
  var idx = Math.floor(ane.num * Math.random());
  // 獲取當前海葵終點座標 x, y
  var x = ane.headx[idx];
  var y = ane.heady[idx];
  // 依據終點座標 賦值當前食物
  this.x[i] = x;
  this.y[i] = y;
  // 修改當前食物狀態 true
  this.alive[i] = true;
  // 修改當前食物寬度高度 0
  this.l[i] = 0;
  // 修改當前食物類型
  this.fruitType[i] = Math.random() < 0.9 ? "blue" : "orange";
  // 修改當前食物速度
  this.spd[i] = Math.random() * 0.017;
}

//程序原則：自己數據自己修改，讓別人調用
//為構造函數添加食物消失方法
fruitObj.prototype.dead = function (i) {
  this.alive[i] = false;
}
