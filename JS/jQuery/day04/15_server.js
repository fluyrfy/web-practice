const http=require("http");
http.createServer(
  (req,res)=>{
    //  修改响应头 成功
    res.writeHead(200,{
      //"Access-Control-Allow-Origin":"http://127.0.0.1:5500",
      //"Access-Control-Allow-Origin":"*",//可伪装成任意网址
      //内容类型      普通文本
      "Content-Type":"text/plain;charset=utf-8"//避免乱码
    })
    res.write("北京 晴 15~25");
    res.end();
  }
).listen(3000);
//使用node 15_server.js运行
//打开浏览器，地址栏输入: 
//http://localhost:3000/
//结果: 北京 晴 15~25
//说明服务端正确