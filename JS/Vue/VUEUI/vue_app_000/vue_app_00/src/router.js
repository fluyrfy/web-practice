import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import A from './components/exam/A.vue'
import B from './components/exam/B.vue'
import Exam01 from "./components/exam/Exam01.vue" //引入自訂義組件 名字定義為Exam01
import Exam02 from "./components/exam/Exam02.vue" //引入自訂義組件 名字定義為Exam02
import Exam03 from "./components/exam/Exam03.vue" //引入自訂義組件 名字定義為Exam03
import Exam04 from "./components/exam/Exam04.vue" //引入自訂義組件 名字定義為Exam04
import Exam05 from "./components/exam/Exam05.vue" //引入自訂義組件 名字定義為Exam05
import Exam06 from "./components/exam/Exam06.vue" //引入自訂義組件 名字定義為Exam06
import Exam07 from "./components/exam/Exam07.vue" //引入自訂義組件 名字定義為Exam07
import Fa08 from "./components/exam/Fa08.vue" //引入自訂義組件 名字定義為Fa08
import Fa09 from "./components/exam/Fa09.vue" //引入自訂義組件 名字定義為Fa09
import Login from "./components/xz/Login.vue" //引入自訂義組件 名字定義為Login
import Product from "./components/xz/Product.vue" //引入自訂義組件 名字定義為Product
import Cart from "./components/xz/Cart.vue" //引入自訂義組件 名字定義為Cart


//微信消息項目
import Home from "./components/message/Home.vue" //引入自訂義組件 名字定義為Home
import MessageList from "./components/message/common/MessageList.vue" //引入自訂義組件 名字定義為MessageList

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam07',component:Exam07},
    {path:'/Fa08',component:Fa08},
    {path:'/Fa09',component:Fa09},
    {path:'/MessageList',component:MessageList},
    {path:'/Login',component:Login},
    {path:'/Product',component:Product},
    {path:'/Cart',component:Cart},
    {path:'/A',component:A},
    {path:'/B',component:B},
  ]
})
