<template>
  <div>
    <!-- <h1>多條消息組件 MessageList.vue</h1>
    <h1>將MessageList.vue臨時改為全局組件</h1>
    <h1>給組件分配訪問路徑 /MessageList</h1> -->
    <message class="itemStyle" v-for="(item,index) in rows.data" :key="index" :sendTime="item.time" :title="item.title" :subTitle="item.subtitle" ></message>
  </div>
</template>
<script>
import Message from './Message.vue'
//引入項目模擬數據文件
import json from '../json/messagelist.json'//自動將json文件數據轉換js對象
export default {
  data() {
    return {
      //保存json中的數據
      rows:json
    }
  },
  components:{
    "message":Message,
  }
}
</script>
<style scoped>
 .itemStyle{
   padding: 5px;
   border-bottom: 1px solid #d9d9d9;
 }
</style>
