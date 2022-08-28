//js/1.js中
//当所有网页内容加载完成自动执行以下内容
//window.addEventListener(
// $(window).on(
//   "load",
//$(window).load(
//如果希望在DOM内容加载后就提前执行
$(function(){
  alert("1.js执行完毕")
});