// 完成遊戲中碰撞檢測
function momFruitsCollsion() {
  for (let i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) { //判斷食物是否顯示
      var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y); //計算食物和大魚位置
      if (l < 900) {
        // fruit.alive[i] = false; //食物消失
        fruit.dead(i);
        //累加分數
        //判斷食物類型
        var type = 1;
        if (fruit.fruitType[i] != "blue") {
          type = 2;
        }
         //累加
         data.add(type);
         //顯示獎勵光環
         wave.born(fruit.x[i], fruit.y[i]);
      }
    }
  }
}
//將文件添加到 index.html
//將函數添加到 main.js gameloop中
