//完成海葵類別
//海葵構造函數 aneObj
var aneObj = function () {
  //保存起點座標 X
  this.rootx = [];
  //保存終點座標 X
  this.headx = [];
  //保存終點座標 Y
  this.heady = [];
  //保存擺動幅度 amp
  this.amp = [];
  //保存1~-1之間值
  this.alpha = 0;
}
//添加屬性num = 50
aneObj.prototype.num = 50;
//添加方法 init
aneObj.prototype.init = function () {
  for (let i = 0; i < this.num; i++) {
    //初始化起點 X
    this.rootx[i] = i * 16 + Math.random() * 20; //隨機數，畫起來才不會死板
    //初始化終點 X
    this.headx[i] = this.rootx[i]; //初始為直線
    //初始化終點 Y
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    //初始化 apm
    this.amp[i] = Math.random()*30 + 20;

  }

}
//添加方法 draw
aneObj.prototype.draw = function () {
  //計算非常小的小數
  this.alpha += deltaTime * 0.0008;
  var l = Math.sin(this.alpha);
  //console.log(l); // 4~5秒週期
  //保存畫筆2狀態
  ctx2.save();
  //設置樣式與外觀
  ctx2.strokeStyle = "#3b154e"; //描邊樣式
  ctx2.globalAlpha = 0.6; //透明度
  ctx2.lineCap = "round" //頂端圓角
  ctx2.lineWidth = 20; //描邊寬度
  //創建循環遍歷每個海葵
  for (let i = 0; i < this.num; i++) {
    //創建新路徑
    ctx2.beginPath();
    //移動到起點座標
    ctx2.moveTo(this.rootx[i], canHeight);
    //重新計算終點座標 X
    this.headx[i] = this.rootx[i] + l * this.amp[i];
    //繪製貝茲曲線 控制點 x, y 終點 x, y
    ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
    //描邊
    ctx2.stroke();
  }
  //恢復畫筆2狀態
  ctx2.restore();
}
//將ane.js添加到index.html
//在main.js創建海葵對象
//調用相關方法

