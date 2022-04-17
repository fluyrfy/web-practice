import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09-todo-list',
  templateUrl: './myc09-todo-list.component.html',
  styleUrls: ['./myc09-todo-list.component.css']
})
export class Myc09TodoListComponent {
  todo: String = '';
  todoList: Array<String> = []; //超級重要 ts Array需要在聲明內部項目型態 Ex: <{}> or <String>
  show = {
    noshow:false,
    show:true
  }
  insert() {
    this.todoList.push(this.todo);
    this.todo = "";
    if (this.todoList.length !== 0) {
      this.show['noshow'] = true;
      this.show['show'] = false;
    }
    console.log(this.todo);
    console.log(this.todoList);
  }
  del(index: number){
    console.log(index);
    this.todoList.splice(index, 1);
    if (this.todoList.length == 0) {
      this.show['noshow'] = false;
      this.show['show'] = true;
    }
  }
}
