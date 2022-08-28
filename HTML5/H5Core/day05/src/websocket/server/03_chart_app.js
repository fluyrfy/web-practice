//創建web服務器
const app = require("http").createServer().listen(4000);
//創建io對象
const io = require("socket.io")(app, {
  cors: { //處理跨域
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"]
  }
} );
//創建連接客戶數量
var clientCount = 0;
//為io綁定事件客戶連接
io.on("connection", (socket) => {
  clientCount++;
  var nickname = "user: " + clientCount; //創建暱稱\
  //將暱稱廣播所有用戶
  io.emit("enter", nickname + " comes in");
  socket.on("message", (data) => {
    io.emit("list", nickname + " says: " + data);
  })
  //當客戶退出廣播所有人
  socket.on("disconnect", (data) => {
    io.emit("leave", nickname + " leave");
  })
} );

