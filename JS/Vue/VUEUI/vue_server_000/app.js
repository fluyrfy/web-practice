//服務器端項目
// 1.下載第三方模塊
//express/express-session/cors/mysql
// 2.將第三方模塊引入到當前程序中
const express=require("express");
const session=require("express-session");
const cors=require("cors");
const mysql=require("mysql");
// 3.創建數據庫連接池
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  connectionLimit:20,
  database:"xz"
})
// 4.創建web服務器監聽 8080
var server=express();
server.listen(8080);
// 5.跨域處理 cors
  // 5.1配置允許訪問程序地址(腳手架)
      // http://127.0.0.1:5050
  // 5.2每請求是否驗證
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],//跨域處理
  credentials:true //是否驗證
}))
//配置session一定要在所有請求之前
server.use(session({
  secret:"Crusaders",//"安全字符串"將安全字符串值放進加密算法中再加密
  resave:true,//每次請求是否更新原有數據
  saveUninitialized:true, //保持初始化數據
}))

// 7.配置靜態目錄
// http://127.0.0.1:8080/01.jpg
server.use(express.static("public"));

// 6.完成用戶登入
//http://127.0.0.1/login?uname=tom&upwd=123
server.get("/login",(req,res)=>{
  // 6.1接收網頁傳遞數據 用戶名和密碼
  var u = req.query.uname;
  var p = req.query.upwd;
  // 6.2創建sql
  var sql = "SELECT id FROM xz_login ";
  sql+="WHERE uname = ? AND upwd = md5(?)"
  // 6.3執行sql語句並且獲取返回結果
  pool.query(sql,[u,p],(err,result)=>{
    // 6.4判斷登入是否成功
    if(err)throw err;
    // 6.5將結果返回網頁
    if(result.length==0){
      res.send({code:-1,msg:"用戶名或密碼有誤"})
    }else{
      console.log(result);
      //獲取當前用戶登入id
      //result=[RowDataPacket{id:1}]
      var id=result[0].id;
      //將用戶id保存session對象中
      req.session.uid=id;//要用uid 因為session有內建屬性id會衝突
      console.log(req.session)
      res.send({code:1,msg:"登入成功"});
    }
  })
})


//商品分頁顯示
// 1.接收客戶請求 /product GET
server.get("/product",(req,res)=>{
// 2.接收客戶請求數據 pno 頁碼 pageSize 頁大小
  var pno=req.query.pno;
  var ps=req.query.pageSize;
// 3.如果客戶沒有請示數據設置默認數據 pno=1 pageSize=4
  if(!pno){
    pno=1;
  }
  if(!ps){
    ps=4;
  }
//4.創建sql語句
  var sql="SELECT lid,lname,img_url,price ";
  sql+="FROM xz_laptop ";
  sql+="LIMIT ?,?";
  var offset=(pno-1)*ps;//起始記錄數 第一個?
  ps = parseInt(ps);// 腳手架傳來的會是字符串
//5.發送sql語句
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查詢成功",data:result});
  })
})

//將指定商品添加至購物車
//此功能先行條件先登入
//1. 接收客戶端請求 /addcart GET
server.get("/addcart",(req,res)=>{
//2. 判斷當前用戶是否登入成功
//uid
//如果uid為undefined 沒登入
var uid = req.session.uid;
if(!uid){
  res.send({code:-1,msg:"請先登入"});
  return
}
//3. 獲取客戶端數據
//lid,price,lname
var lid = req.query.lid;
var price = req.query.price;
var lname = req.query.lname;
//console.log(lid,price,lname);
//res.send(lid+lname+price);
//4. 創建sql查詢:當前用戶是否購買此商品
var sql="SELECT id FROM xz_cart";
sql+=" WHERE uid = ? AND lid = ?";
//5. 執行sql語句
pool.query(sql,[uid,lid],(err,result)=>{
  if(err)throw err;
  //6. 在回調函數中做判斷，沒買過 添加，已購買 更新
  if(result.length==0){
    var sql= `INSERT INTO xz_cart VALUES(null,${lid},${price},1,'${lname}',${uid})`;//lname是設置varchar 所以要用''框起來
  }else{
    var sql=`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
  }
  //7. 執行sql獲取返回結果
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //8. 如果sql UPDATE INSERT DELETE
    //判斷執行成功 affectedRows
    if(result.affectedRows>0){
      res.send({code:1,msg:"商品添加成功"});
    }else{
      res.send({code:-2,msg:"添加失敗"}); //-1在登入失敗時使用
    }
  })
})
})

//查詢指定用戶購物車信息
server.get("/carts",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"請先登入"});
    return;
  }
  var sql="SELECT id,lname,price FROM xz_cart WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send({code:1,msg:"查詢成功",data:result});
  })
})


//刪除購物車表中指定數據
server.get("/delItem",(req,res)=>{
//判斷是否登入
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"請登入"});
    return;
  }
//1. 獲取客戶端發送數據id
  var id = req.query.id;
//2. 創建sql語句
  var sql="DELETE FROM xz_cart WHERE id=?"
//3. 執行sql語句
  pool.query(sql,[id],(err,result)=>
  {
    if(err)throw err;
    //4. 獲取服務器結果判斷是否刪除成功
    if(result.affectedRows>0){
      res.send({code:1,msg:"刪除成功"});
    }else{
      res.send({code:-1,msg:"刪除失敗"});
    }
})
})

//刪除購物車中多個商品
server.get("/delItems",(req,res)=>{
  //1.獲取參數:id=1,2,3
  var id=req.query.id;
  //2.創建sql語句
  var sql=`DELETE FROM xz_cart WHERE id IN (${id})`;
  //3.執行sql語句
  pool.query(sql,(err,result)=>{
    //4.獲取服務器返回結果
    if(err) throw err;
    if(result.affectedRows>0){
    //5.將結果返回客戶端
      res.send({code:1,msg:"刪除成功"})
    }else{
      res.send({code:-1,msg:"刪除失敗"})
    }
  })
})





