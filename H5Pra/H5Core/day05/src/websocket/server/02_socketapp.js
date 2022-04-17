//創建socket服務器
const app = require("http").createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };


  if (req.method === "") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (["GET", "POST"].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    res.end("Hello World");
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
}); //創建web服務器，http為內置模組不需要下載
// const cors = require("cors()");
const io = require("socket.io")(app, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"]
  }
} ); //創建socket.io對象
app.listen(3000); //綁定監聽端口

io.on("connection", (socket) => {
  console.log("有客戶連接服務器");
  socket.on("message", (data) => { //綁定事件名稱自定義
    console.log("客戶端向服務器發送數據：" + data)
  } );
  socket.emit("server", "很高興認識你");
  //發送廣播消息給所有客戶端
  io.emit("list", "廣播消息");
  //接收客戶消息：離開
  socket.on("disconnect", (data) => { //默認函數名不可改名
    console.log("當前客戶離開....")
  } )
});




