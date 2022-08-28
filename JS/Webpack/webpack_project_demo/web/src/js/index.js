// 引入 util.js 導出的方法
import { getCompanyName } from "./util.js";
// 引入 index.css
import * as style from "../css/index.css";

function createDiv() {
  var div = document.createElement("div");
  div.classList.add("hello");
  div.innerHTML = "版权所有：" + getCompanyName();
  return div;
}
document.body.appendChild(createDiv());
