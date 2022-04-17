<template>
  <div>
    <!-- TabbaarIcon.vue -->
    <img :src="focused?selectedimage:normalimage" alt="" class="imgStyle">
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props:{
    focused:false, //選中狀態
    selectedimage:{default:""}, //選中圖標
    normalimage:{default:""}, //默認圖片
  }
}
</script>
<style scoped>
  .imgStyle{
    width:30px;
    height: 30px;
  }

</style>
