// 功能一:大魚身體切換
// 功能二:大魚旋轉面向屬標
// 創建大魚構造函數 momObj
var momObj = function () {
  // 大於位置 x, y
  this.x;
  this.y;
  // 大魚游動角度
  this.angle;
  // 保存大魚眼睛
  this.bigEye = [];
  // 保存大魚身體
  this.bigBody = [];
  // 保存大魚尾巴
  this.bigTail = [];
  // 創建二個變量控制下標切換頻率
  this.bigEyeIndex = 0;
  this.bigEyeStart = 0; //計時開始
  this.bigEyeEnd = 3000;  //計時結束
  // 完成大魚尾巴切換
  this.bigTailIndex = 0;
  this.bigTailStart = 0; //尾巴計時開始
  this.bigTailEnd = 200;  //尾巴計時結束
  // 完成大魚身體切換
  this.bigBodyIndex = 0;
  this.bigBodyStart = 0;
  this.bigBodyEnd = 4000;
}
// 添加方法 init
momObj.prototype.init = function () {
  // 初始化 x, y
  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  // 初始化游動角度
  this.angle = 0;
  // 創建二個圖片對象保存大魚眼睛數組並下載圖片
  for (let i = 0; i < 2; i++) {
    this.bigEye[i] = new Image();
    this.bigEye[i].src = "src/bigEye" + i + ".png";
  }
  // 創建八個圖片對象保存大魚身體數組並下載組件
  for (let i = 0; i < 8; i++) {
    this.bigBody[i] = new Image();
    this.bigBody[i].src = "src/bigSwim" + i + ".png";
  }
  // 創建八個圖片對象保存大魚尾巴數組並下載圖片
  for (let i = 0; i < 8; i++) {
    this.bigTail[i] = new Image();
    this.bigTail[i].src = "src/bigTail" + i + ".png";
  }
}
// 添加方法 draw
momObj.prototype.draw = function () {
  //累加大魚眼睛計時到 3000 切換下標
  this.bigEyeStart += deltaTime;
  if (this.bigEyeStart > this.bigEyeEnd) {
    this.bigEyeIndex = (this.bigEyeIndex + 1) % 2;
    this.bigEyeStart = 0;
    if (this.bigEyeIndex == 0) {
      this.bigEyeEnd = 3000;
    }
    if (this.bigEyeIndex == 1) {
      this.bigEyeEnd = 300;
    }
  }
  //大魚尾巴計時累加
  this.bigTailStart += deltaTime;
  // 如果開始時間大魚結束時間
  if (this.bigTailStart > this.bigTailEnd) {
    this.bigTailIndex = (this.bigTailIndex + 1) % 8;
    //計時器清0
    this.bigTailStart = 0;
  }

  // 完成大魚身體圖片切換
  this.bigBodyStart += deltaTime;
  //判斷計時開始大於計時結束
  if (this.bigBodyStart > this.bigBodyEnd) {
    //切換圖片
    this.bigBodyIndex = (this.bigBodyIndex + 1) % 8;
    //清空計時開始
    this.bigBodyStart = 0;
  }

  this.x = lerpDistance(mx, this.x, 0.98);
  this.y = lerpDistance(my, this.y, 0.99);

  //計算大魚與鼠標之間座標
  var deltaY = my - this.y;
  var deltaX = mx - this.x;
  //計算大魚與鼠標之間角度
  var beta = Math.atan2(deltaY, deltaX) + Math.PI;
  //計算大魚向鼠標角度慢慢調整
  this.angle = lerpAngle(beta, this.angle, 0.9);


  //保存畫筆一狀態
  ctx1.save();
  //將畫布原點移動到大魚身上中心
  ctx1.translate(this.x, this.y);
  //設置大於旋轉角度
  ctx1.rotate(this.angle);
  //繪製 身體 尾巴 眼睛
  ctx1.drawImage(this.bigBody[0], -this.bigBody[0].width * 0.5, -this.bigBody[0].height * 0.5);


  ctx1.drawImage(this.bigTail[this.bigTailIndex], -this.bigTail[0].width * 0.5 + 30, -this.bigTail[0].height * 0.5);
  ctx1.drawImage(this.bigEye[this.bigEyeIndex], -this.bigEye[0].width * 0.5, -this.bigEye[0].height * 0.5);
  ctx1.drawImage(this.bigBody[this.bigBodyIndex], -this.bigBody[0].width * 0.5, -this.bigBody[0].height * 0.5);
  //恢復畫筆一狀態
  ctx1.restore();
  // 大魚睜眼時間長 閉眼時間短
  // 大魚身體與尾巴
}
// 添加至 index.html
// 在 main.js創建大魚對象並調用相關方法
