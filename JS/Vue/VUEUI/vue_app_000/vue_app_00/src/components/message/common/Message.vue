<template>
  <div class="rootstyle">
    <!-- <h1>一條消息組件</h1> -->
    <!-- 左側標題與圖片 -->
    <div class="leftImgTxt">
      <img :src="imgurl" alt="" class="imgstyle">
      <div class="titleDoc">
        <span class="titleable">{{title}}</span>
        <span class="subtitle">{{subTitle}}</span>
      </div>
    </div>

    <!-- 右側時間 -->
    <span class="sendtime">{{sendTime}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props:{
    imgurl:{default:""},
    sendTime:{default:""},//發送時間
    title:{default:""},//標題
    subTitle:{default:""},//子標題
    imgurl:{default:""},
  }
}
</script>
<style scoped>
  .rootstyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .leftImgTxt{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .imgstyle{
    width: 50px;
    height: 50px;
  }
  .titleDoc{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
  /* 標題 */
  .titleable{
    color:#000;
    font-size:17px;
  }
  /* 子標題 */
  .subtitle{
    color:gray;
    margin-top: 4px;
  }
</style>
