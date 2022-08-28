//main.js 彈幕主管程序

// 0.1創建全局變數保存彈幕對象
var msg;
// 0.2創建變數保存畫筆與畫布
var c3;
var ctx;
var canWidth;
var canHeight;
var inputMsg;
var inputColor;
var inputFont;
var inputBtn;

//1.創建入口函數 game
function game() {
  // console.log(1);
  init();
  gameloop();
}
//2.創建初始化函數
function init() {
  // console.log(2);

  //2.3初始化畫布與畫筆對象
  c3=document.getElementById("c3");
  ctx=c3.getContext("2d");
  //2.4初始化畫布寬度和高度
  canWidth=c3.width;
  canHeight=c3.height;
  //2.5將用戶輸入框按鈕賦值
  inputMsg=document.getElementById("inputMsg");
  inputFont=document.getElementById("inputFont")
  inputColor=document.getElementById("inputColor");
  inputBtn=document.getElementById("inputBtn")
  // console.log(inputFont);
  // 2.1創建彈幕對象
  msg=new msgObj();
  //2.2調用彈幕對象初始化方法
  msg.init();

  //為發送按鈕綁定點擊事件
  inputBtn.addEventListener("click",handleMsg)
}
//3.創建循環繪製函數
function gameloop() {
  //3.1創建智能定時器
  requestAnimationFrame(gameloop);
  // console.log(3);
  //3.2調用彈幕對象繪製方法
  msg.draw();
}
//4.網頁內容加載成功後調用game
document.body.onload=game; //不加()

//5.創建函數獲取用戶輸入內容並發送彈幕池
function handleMsg() {
  //5.1獲取用戶輸入內容 顏色 大小 內容
  var m={msg:inputMsg.value,color:inputColor.value,font:inputFont.value}
  //5.2調用msg.add
  msg.add(m)
}

