import React from "react";

export default class MyC05 extends React.Component {
  constructor() {
    super();
    this.state = {
      uname: "Frank Liao",
      age: 22,
      salary: 40000,
      sex: 1,
    };
  }
  doUnameChange = (e) => {
    this.setState({
      uname: e.target.value,
    });
  };
  render() {
    // 至此, 輸入框中會呈現狀態數據, 但現在為受控組件無法修改
    return (
      <input onChange={this.doUnameChange} value={this.state.uname}></input>
    );
  }
}
