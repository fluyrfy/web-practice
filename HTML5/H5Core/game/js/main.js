//創建許多全局變數保證遊戲中不同角度可以相互調用
//保存二個畫布
var can1;
var can2;
//保存二支畫筆
var ctx1;
var ctx2;
//保存畫筆寬度和高度
var canWidth;
var canHeight;
//保存畫面時間差
var lastTime;
var deltaTime; //用於保存繪製整個畫面的最佳間隔時間
//保存背景圖片對象
var bgPic;
//保存海葵對象
var ane;
//保存食物對象
var fruit;
// 保存大魚對象
var mom;
// 保存鼠標位置
var mx = 0; //需有初始值才不為undefined 否則運算出錯
var my = 0;
//保存分數對象
var data;
//保存特效對象
var wave;

//創建函數game
function game() {
  init();
  gameloop();
}
//創建函數init
function init() {
  //初始化畫布
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  //初始化畫筆
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  //初始化畫布寬度高度
  canWidth = can1.width;
  canHeight = can1.height;
  //初始化時間差
  lastTime = Date.now(); //紀錄沒有繪圖開始時間
  deltaTime = 0; //時間差初始為0
  //初始化背景
  bgPic = new Image();
  bgPic.src = "./src/background.jpg";
  //初始化海葵對象並調用初始化方法
  ane = new aneObj();
  ane.init();
  //初始化食物對象並調用初始化方法
  fruit = new fruitObj();
  fruit.init();
  // 初始化大魚對象並調用初始化方法
  mom = new momObj();
  mom.init();
  //為畫布綁定屬標移動事件
  can1.addEventListener("mousemove", handleMove);
  //初始化分數對象
  data = new dataObj();
  //初始化光環特效對象
  wave = new waveObj();
  wave.init();
}
//創建函數gameloop
function gameloop() {
  //創建定時器執行gameloop
  requestAnimationFrame(gameloop);
  //獲取繪製完成時間點
  var now = Date.now();
  //完成時間-開始時間
  deltaTime = now - lastTime;
  //將上一個時間清零
  lastTime = now;
  // console.log(deltaTime);
  //繪製背景圖片
  ctx2.drawImage(bgPic, 0, 0);
  //大魚碰撞食物
  momFruitsCollsion();
  //繪製海葵
  ane.draw();
  //調用監聽畫布函數
  fruitMonitor();
  //繪製食物
  fruit.draw();
  // 清除畫布一
  ctx1.clearRect(0, 0, canWidth, canHeight);
  // 繪製大魚
  mom.draw();
  //繪製分數
  data.draw();
  //繪製特效
  wave.draw();
}
document.body.onload = game;
function handleMove(event) {
  // console.log(event.offsetX, event.offsetY);
  mx = event.offsetX;
  my = event.offsetY;
}
