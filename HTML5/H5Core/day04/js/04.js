// var start = new Date().getTime();
//     do {
//       var end = new Date().getTime();
//     }while (end - start < 5000);

onmessage = function (event) {
  console.log("UI發數據:" + event.data);
}
postMessage("執行完成");

// var msg = document.getElementById("msg"); //報錯: worker線程執行不能包含DOM/BOM元素
// msg.innerHTML = "執行完成"
