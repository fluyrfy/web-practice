// 完成分數計算
var dataObj = function () {
  this.score = 0;
}
dataObj.prototype.draw = function () {
  //保存畫筆1狀態
  ctx1.save();
  //修改填充樣式
  ctx1.fillStyle = "#fff";
  //修改文字大小
  ctx1.font = "35px Verdana";
  //修改文字居中
  ctx1.textAlign = "center"
  //繪製文本
  ctx1.fillText("SCORE: " + this.score, canWidth * 0.5, canHeight * 0.8);
  //恢復畫筆1狀態
  ctx1.restore();
}
// 將 data.js 添加到 index.html
// 在 main.js 創建分數對象並且調用相關方法

// 添加方法 add
dataObj.prototype.add = function (type) { //type:大魚吃到的食物類型
  this.score += 100 * type;
}
