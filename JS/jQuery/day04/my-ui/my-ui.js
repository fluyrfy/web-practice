//my-ui文件夹下新建my-ui.js

/*为jQuery家的原型对象添加一个新的accordion()插件函数*/
jQuery.fn.accordion=function(){
  //this->将来调用当前accordion()函数的.前的jQuery对象，也就是整个插件的父对象。
  var $parent=this;
  //1. 自动侵入所需的class
  //为$parent自己加accordion class
  $parent.addClass("accordion")
  //return $parent
  //$panent下奇数位置的元素加title class
      //.children(":nth-child(2n+1)")
      .children(":even") //所有title
      .addClass("title") 
      //return 所有title
  //每个title的下一个兄弟都加content fade 两个class
      .next() //每个title的下一个兄弟
              //得到三个content
      .addClass("content fade")
      //return 三个content
  //所有content中的第1个加 in class
      .first()//获得集合中的第一个元素
      .addClass("in");
  //2. 自动绑定事件处理函数
  $parent
  .on("click",".title",function(){
      $(this).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
  });
}
//将来希望: 
//$("#my-accordion").accordion();
//this->$("#my-accordion") 父级div