//js/myquery.js文件中:

//为jQuery类型添加一个sum()函数，用来计算找到的所有元素的内容的和
//jQuery.fn=jQuery.prototype
//  golden    李然
//jQuery.prototype.sum=function(){
jQuery.fn.sum=function(){
  var sum=0;
  //遍历当前找到的jq对象中所有dom元素
  this.each(function(i,domElem){
    sum+=parseFloat(domElem.innerHTML)
  })
  return sum;
}
//调用:
//$("ul>li").sum()
//而sum()就是要遍历.前的$("ul>li")