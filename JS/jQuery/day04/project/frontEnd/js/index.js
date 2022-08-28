//删除index.html结尾的<script src="js/ajax.js"
$(function(){
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json",
    success:function(result){
      var [p1,p2,p3]=result;
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-2">${p1.title}</h5>
          <h6 class="mb-5">
            <a class="text-dark" href="javascript:;">${p1.details}</a>
          </h6>
          <span class="text-primary">¥${p1.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p1.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
      </div>`;
      document.getElementById("p1").innerHTML=html;

      //截取result中后三个商品
      var others=result.slice(3);
      var html="";//准备累积三段HTML片段
      //遍历others中每个商品对象
      for(var p of others){
        //每遍历一段商品对象，就向HTML中拼接一段HTML片段
        html+=`<div class="col-md-4 p-0 pl-2">
          <div class="card border-0 text-center">
            <img class="card-img-top" src="${p.pic}" alt="Card image cap">
            <div class="card-body p-0 pr-1 pl-1">
              <span class="d-inline-block">${p.title}</span>
              <span class="text-primary small">¥${p.price.toFixed(2)}</span>
              <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
            </div>
          </div>
        </div>`;
      }
      document.getElementById("others").innerHTML=html;
    }
  })
});