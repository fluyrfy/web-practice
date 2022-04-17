import React from "react";

export default class MyC01TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      todoList: ["上課", "睡覺", "吃飯"],
    };
  }
  del(index) {
    console.log(index);
    let todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList,
    });
  }
  type = (e) => {
    let todo = this.state.todo;
    todo = e.target.value;
    this.setState({
      todo: todo,
    });
  };
  insert = () => {
    console.log(this.state.todo);
    let todoList = this.state.todoList;
    todoList.push(this.state.todo);
    this.setState({
      todoList,
      todo: "",
    });
  };
  render() {
    return (
      <div>
        <h3>我的待辦事項列表</h3>
        <hr />
        <input onChange={this.type} value={this.state.todo}></input>
        <button type="" onClick={this.insert}>
          新增
        </button>
        <ul>
          {this.state.todoList.map((e, i) => {
            return (
              <li key={i}>
                <span>{e}</span>
                <button
                  type=""
                  onClick={() => {
                    this.del(i);
                  }}
                >
                  刪除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
