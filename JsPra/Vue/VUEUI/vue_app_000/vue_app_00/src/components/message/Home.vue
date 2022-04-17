<template> <!--入口組件-->
  <div class="page-tabbar">
    <!-- <h1>Home.vue</h1> -->
    <div class="page-wrap">
      <!-- 調用子組件 -->
      <title-bar leftTitle="Crusaders Quest (99+)" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search="mysearch" :add3="myadd3"></title-bar>
      <!-- 空div 48px高度 -->
      <div style="margin-top: 48px;"></div>
      <!-- 面板 父面板 子面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="message"><message-list></message-list></mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部導航欄 -->
      <mt-tabbar fixed v-model="active">
        <mt-tab-item id="message" @click.naive="selected(0)"><tabbar-icon :selectedimage="require('../../assets/ic_weixin_selected.png')" :normalimage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[0].isSelect" ></tabbar-icon><br/>微信</mt-tab-item>
        <mt-tab-item id="contact"><tabbar-icon :selectedimage="require('../../assets/ic_weixin_selected.png')" :normalimage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[1].isSelect" @click.naive="selected(1)"></tabbar-icon><br/>通訊錄</mt-tab-item>
        <mt-tab-item id="discover"><img :src="focused?selectedImage:normalImage" alt="" class="imgStyle"><tabbar-icon :selectedimage="require('../../assets/ic_weixin_selected.png')" :normalimage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[2].isSelect" @click.naive="selected(2)"></tabbar-icon><br/>發現</mt-tab-item>
        <mt-tab-item id="mine"><img :src="focused?selectedImage:normalImage" alt="" class="imgStyle"><tabbar-icon :selectedimage="require('../../assets/ic_weixin_selected.png')" :normalimage="require('../../assets/ic_weixin_normal.png')" :focused="currentIndex[3].isSelect" @click.naive="selected(3)"></tabbar-icon><br/>我的</mt-tab-item>
      </mt-tabbar>

    </div>
  </div>
</template>
<script>
import TabbarIcon from './common/TabbarIcon.vue' //引入底部導航條組件
import MessageList from './common/MessageList.vue' //引入消息列表子組件
import TitleBar from './common/TitleBar.vue' //引入子組件
import Message from './common/Message.vue' //引入子組件
export default {
  data() {
    return {
      active:"message",
      //創建數組保存所有圖片狀態
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
      ]
    }
  },
  components:{
    "titleBar":TitleBar, //註冊組件
    "message":Message,
    "messageList":MessageList,
    "tabbarIcon":TabbarIcon,
  },
  methods: {
    mysearch(){
      console.log("搜索")
    },
    myadd3(){
      console.log("添加")
    },
    selected(idx){ //當點擊底部按鈕切換圖片狀態
      for(var i=0;i<this.currentIndex.length;i++){
        if(i == idx){
          this.currentIndex[i].isSelect==true;
        }else{
          this.currentIndex[i].isSelect==false;
        }
      }
    }
  },

}
</script>
<style scoped>
  .page-tabbar{
    /* 元素溢出隱藏 */
    overflow: hidden;
  }
  .page-wrap{
    overflow: auto;
    padding-bottom: 60px;
  }
  /* 覆蓋原組件中樣式 tabbar按鈕中文字顏色 */
  /* 默認文字顏色、選中文字顏色 */
  .mint-tabbar>.mint-tab-item{
    color: #999;
  }
  .mint-tabbar>.mint-tab-item.is-selected{
    background-color: transparent; /*透明*/
    color: #45c018; /*文字顏色*/
  }
</style>
