<template>
  <div>
    <!-- <h3>Cart.vue</h3> -->
    <div class="cart">
      <!-- 1.頂部複選框：全選 -->
      <div class="selectall">
        全選<input type="checkbox" @change="selectAll()" v-model="all">
      </div>
      <!-- 2.商品信息 -->
      <div class="cart-item" v-for="(item,index) of list" :key="index">
        <div class="leftText">
          <input type="checkbox"  v-model="item.cb">
          <div>{{item.id}}</div>
          <div class="lname">{{item.lname}}</div>
          <div class="price">{{item.price}}</div>
        </div>
          <mt-button @click="delitem()" :data-id="item.id">刪除</mt-button>
      </div>
    </div>
      <!-- 3.購物車商品數量：刪除選中商品，清空購物車 -->
      <div>
        購物車中商品數量
        <span style="color:red">0</span>
        <mt-button @click="delItems()">刪除選中商品</mt-button>
        <mt-button>清空購物車</mt-button>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[],//當前登入用戶購物車列表
      all:false,
    }
  },
  created() {
    this.loadmore();
  },
  methods: {
    selectAll(){
      console.log(this.all);
      console.log(123);
      for(var item of this.list){
        item.cb=this.all;
      }
    },
    loadmore(){
      //功能:獲取當前用戶購物車列表
      var url="carts";
      this.axios.get(url).then(res=>{
        if(res.data.code==-1){
          this.$messagebox("登入","請先登入").then(res=>{
            this.$router.push("/Login");
          })
        }else{
          // console.log(res);
          // console.log(this.list);
          //創建循環遍歷res.data.data中數據
          var rows=res.data.data;
          for(var item of rows){
            //為其添加屬性cb值false
            item.cb=false;
          }
          //將新數組賦值list
          this.list=rows;
        }
      })
    },
    delitem($event){
      this.$messagebox.confirm("是否刪除指定商品").then(res=>{
        var id=event.target.dataset.id;
        console.log(id);
        var obj={id};
        console.log(obj);
        var url="delItem";
        this.axios.get(url,{params:obj}).then(res=>{
          if(res.data.code==-2){
            this.$messagebox("登入","請先登入").then(res=>{
              this.$router.push("/Login");
            })
          }else if(res.data.code==1){
            this.$toast("刪除成功");
            this.loadmore();
          }else{
            this.$toast("刪除失敗");
          }
        })
      }).catch(err=>{

      })
    },
    delItems(){
      //顯示確認框
      this.$messagebox.confirm("是否刪除指定數據").then(res=>{
        //創建變量保存id
        var id="";
        //創建循環遍歷數組中每個元素
        for(var item of this.list){
          //判斷當前元素屬性cb是否等於true
          if(item.cb){
            //拼接id
            id+=item.id+",";
          }
        }
        //去除字符串中最後一個逗號
        id=id.slice(0,-1);
        console.log(id);
        if(id==""){
          this.$toast("請選擇需要刪除的商品");
          return
        }
        //創建url obj 發送ajax
        var url="delItems";
        var obj={id};
        this.axios.get(url,{params:obj}).then(res=>{
          //獲取服務器傳回數據
          if(res.data.code == 1){
            this.$toast("刪除成功");
            this.loadmore();
          }else{
            this.$toast("刪除失敗");
          }
        })
      }).catch(err=>{

      })
    }
  },
}
</script>
<style scoped>
  /*1.商品項目元素*/
  .cart-item{
    display: flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid #ccc;
    margin-top: 25px;
  }
  /*2.修改左側文字*/
  .leftText{
    display: flex;
    align-items:center;
  }
  /*3.修改商品名稱*/
  .lname{
    margin-left: 25px;
  }
  .price{
    margin-left: 25px;
  }
</style>
