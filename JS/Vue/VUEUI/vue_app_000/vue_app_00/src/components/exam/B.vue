<template>
  <div>
    <h1>B.vue 演示Vuex集中保存數據</h1>
    <h1>今年年齡{{$store.getters.getAge}}</h1>
    <h1>集中保管的陣列資料：{{$store.getters.getList}}</h1>
    <h2>想開的車：{{$store.getters.getCar}}</h2>
    <button type="" @click="upCar">讓車子升級</button>
    <button type="" @click="upAge">長一歲</button>
    <button type="" @click="clearAge">清空年齡(異步)</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    upCar(){
      this.$store.commit("updateCar");
    },
    upAge(){
      this.$store.commit("updateAge",2);
    },
    clearAge(){ //調用Actions中的異步方法
      this.$store.dispatch("modifyAge");
    }
  },
}
</script>
