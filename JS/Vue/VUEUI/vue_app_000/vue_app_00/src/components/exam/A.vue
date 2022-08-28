<template>
  <div>
    <h1>A.vue 演示Vuex集中保存數據</h1>
    <h1>今年年齡{{$store.getters.getAge}}</h1>
    <h1>集中保管的陣列資料：{{$store.getters.getList}}</h1>
    <h2>想開的車：{{$store.getters.getCar}}</h2>
    <!-- var store=new Vuex.Store({
      state:{//集中管理數據屬性
        age:23,
      },
      getters:{ //集中獲取數據函數
        getAge(state){ //所有函數都有參數
          return state.age;
        }
      }
    }); -->
  </div>
</template>
<script>
export default {
  created() {
    console.log(this);
  },
}
</script>
