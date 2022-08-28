<template>
  <div class="product-app">
    <!-- <h1>Product.vue商品頁面</h1> -->
    <!-- 此div表示一個商品 -->
    <div class="goods-item" v-for="(item,index) of list" :key="index">
      <!-- 商品圖片 -->
      <img :src="'http://127.0.0.1:8080/'+item.img_url" alt="">
      <!-- 商品名稱 -->
      <h1>{{item.lname}}</h1>
      <!-- 商品價格 -->
      <div class="info">{{item.price}}</div>
      <!-- 按鈕：加入購物車 -->
      <mt-button @click="addcart()" :data-lid="item.lid" :data-price="item.price" :data-lname="item.lname">加入購物車</mt-button>
    </div>
    <mt-button size="large" @click="loadMore()">加載更多</mt-button>
    <mt-button @click="cart()">查看購物車</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[],
      pno:0, //當前頁碼

    }
  },
  methods: {
    //功能一：當組件創建成功後獲取第一頁數據
    loadMore(){
      console.log(123);
      //1.創建url地址
      var url="product";
      //將當前頁碼加一
      this.pno++;
      var obj={pno:this.pno};
      //2.發送ajax請求獲取第一頁數據
      this.axios.get(url,{params:obj})
      .then(res=>{
        // console.log(res.data.data);
      //3.將數據保存到data中
        //this.list=res.data.data;
        //數組拼接操作
        var rows=this.list.concat(res.data.data);
        this.list=rows;
      })
    },
    addcart($event){
      var lid=event.target.dataset.lid;
      var price=event.target.dataset.price;
      var lname=event.target.dataset.lname;
      console.log(lid)
      var obj={lid,price,lname};
      console.log(obj);
      var url="addcart";
      this.axios.get(url,{params:obj}).then(res=>
      {
        var code=res.data.code;
        if(code==-1){
          this.$messagebox("登入","請先登入").then(res=>{
            this.$router.push("/Login");
            //異步函數 還沒點確認就跳轉了 所以要加入回調
          })
          return;
        }
        if(code==-2){
          this.$messagebox("錯誤","商品添加失敗");
        }else{
          this.$toast("商品添加成功");
        }
      });
    },
    cart(){
      this.$router.push("/Cart")
    }
  },
  created() {
    this.loadMore();

  },
}
</script>
<style scoped>
  /* 1.最外層父元素 */
  .product-app{
    display: flex;
    flex-wrap: wrap; /*元素滿了換行*/
    justify-content: space-between; /*兩端對齊*/
  }
  /* 2.當前商品 49%(一行兩個) */
  .goods-item{
    width: 49%;
    border: 1px solid #ccc; /*商品灰色邊框*/
    border-radius: 5px; /*圓角*/
    margin: 2px 0;
    padding: 2px;
    box-sizing: border-box; /*重新計算元素寬度*/
    display: flex;
    flex-direction: column; /*商品內容按列排放*/
    min-height: 249px;
  }
  /* 3.修飾當前商品中圖片 */
    .goods-item img{
      width: 100%;
    }
  /* 4.修飾當前商品價格 */
  .goods-item .info{
    color: red;
    font-size: 19px;
  }
</style>
