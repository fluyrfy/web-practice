<template>
  <div>
    裁切圖片
    <ImgCutter @cutDown="cutDown"></ImgCutter>
  </div>
</template>
<script>
  import ImgCutter from 'vue-img-cutter'
  export default {
    data() {
      return {

      }
    },
    components: {
      'ImgCutter': ImgCutter,
    },
    methods: {
      cutDown() {

      },
      forIe9:function(){
	// 传入name，src name中必须包含后缀名
	this.$refs.imgCutterModal.handleOpen({
        name:"image.jpg",
        src:"http://imageServ.com/image.jpg",
    });
}
    },

  }
</script>
<style>

</style>
