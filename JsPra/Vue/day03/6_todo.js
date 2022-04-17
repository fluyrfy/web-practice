Vue.component("todo",{
  template:`<div><h1>待辦事項列表</h1>
  <todo-add></todo-add>
  <todo-list></todo-list>
  </div>`,
  //為父組件添加components:
  components:{
    //子組件對象名
    todoAdd,todoList
    //Vue會自動轉換成標籤名
    //'todoAdd:todoAdd'
  }
})
