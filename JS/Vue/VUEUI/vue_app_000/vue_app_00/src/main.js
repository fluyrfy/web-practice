import Vue from 'vue'
import App from './App.vue'
import router from './router'
//完整引入所有組件
import MintUI from 'mint-ui'
//單引入mint-ui樣式表
import 'mint-ui/lib/style.css'
import './font/iconfont.css'

//引入axios套件
import axios from 'axios'
//配置請求時保存session信息
axios.defaults.withCredentials=true;
//配置請求基礎路徑
axios.defaults.baseURL="http://127.0.0.1:8080/" //地址欄不可輸入http://localhost:8080

//引入Vuex
import vuex from 'vuex';

//在vue中註冊mint
Vue.use(MintUI);

// 在vue中註冊axios
// Vue.use(aios) axios不支持這種寫法
//註冊到原型
Vue.prototype.axios=axios;

//引入Vuex
import Vuex from 'vuex';
//註冊vuex
Vue.use(Vuex);
var store=new Vuex.Store({
  state:{//集中管理數據屬性
    age:23,
    list:[1,2,4,5],
    car:"glc43",
  },
  getters:{ //集中獲取數據函數
    getAge(state){ //所有函數都有參數
      return state.age;
    },
    getList(state){
      return state.list;
    },
    getCar(state){
      return state.car;
    }
  },
  mutations:{ //集中修改數據函數屬性
    clear(state){ //添加一個清除年齡的方法
      state.age=0;
    },
    updateCar(state){
      state.car="C300";
    },
    updateAge(state,age){
      state.age+=age;
    }

  },
  actions:{ //集中保存異步修改數據的函數
    modifyAge(context){
      setTimeout(() => {
        //異步調用mutations中定義函數
        context.commit("clear");
      }, 500);
    }
  }
}); //創建儲存對象'



new Vue({
  router,
  render: h => h(App),
  store //將存儲對象添加到vue實例作為屬性
}).$mount('#app')
