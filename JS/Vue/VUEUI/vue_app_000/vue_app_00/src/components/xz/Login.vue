<template>
  <div>
    <!-- <h1>Login.vue用戶登入組件</h1> -->
    <!-- 用戶名輸入框 -->
    <h1>會員登入</h1>
    <mt-field label="用戶名" placeholder="請輸入用戶名" v-model="uname"></mt-field>
    <!-- 用戶密碼輸入框 -->
    <mt-field label="密碼" placeholder="請輸入密碼" v-model="upwd"></mt-field>
    <!-- 登入按鈕(綁定事件) -->
    <mt-button size="large" @click="login">登入</mt-button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      uname:'', //用戶名
      upwd:'' //密碼
    }
  },
  methods: {
    login(){
      // 功能一:完成用戶登入操作
      // 1.獲取用戶名和密碼
      var u=this.uname;
      var p=this.upwd;
      console.log(u,p);
      // 2.創建正則表達式 3~12位 字母數字
      var reg=/^[a-z0-9]{3,12}$/i;
      // 3.判斷如何錯誤 用戶名提示
      if(!reg.test(u)){
        this.$toast("用戶名格式不正確");
        return;
      }
      // 4.判斷如何錯誤 密碼提示
      if(!reg.test(p)){
        this.$toast("密碼格式不正確");
        return;
      }
      // 5.發送ajax axios
      var url="login";
      var obj={uname:u,upwd:p}
      this.axios.get(url,{params:obj}).then(res=>{
        // 6.接收服務器返回數據
        var code=res.data.code;
        if(code==-1){
          // 7.失敗 提示
          this.$messagebox("消息","用戶名或密碼有誤")
        }else{
          // 8.成功 跳轉
          this.$router.push("/Product")
        }
      })

    }
  },
}
</script>
<style>

</style>
