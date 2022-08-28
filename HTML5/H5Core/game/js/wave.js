//光環特效
//創建光環構造函數
var waveObj = function () {
  //添加圓心
  this.x = [];
  this.y = [];
  //添加半徑
  this.r = [];
  //添加狀態 顯示隱藏
  this.alive = [];
}
//添加屬性
waveObj.prototype.num = 10;
//添加方法
waveObj.prototype.init = function () {
  for (let i = 0; i < this.num; i++) {
    this.x[i] = 0;
    this.y[i] = 0;
    this.r[i] = 0;
    this.alive[i] = false;
  }
}
//添加繪製
waveObj.prototype.draw = function () {
  ctx1.save();
  for (let i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      this.r[i] += deltaTime * 0.03;
      if (this.r[i] > 100) {
        this.alive[i] = false;
        return;
      }
      ctx1.beginPath();
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);
      ctx1.strokeStyle = "#fff"
      ctx1.stroke();
    }
  }
  ctx1.restore();
}

//將wave.js添加至index.html
//在main.js創建光環對象並調用相關方法

//添加出生方法
waveObj.prototype.born = function (x, y) {
  //遍歷光環
  for (let i = 0; i < this.num; i++) {
    //查找第一個狀態為false光環
    if (this.alive[i] == false) {
      this.alive[i] == true;
      this.x[i] = x;
      this.y[i] = y;
      this.r[i] = 20;
      return;
    }
  }
}
