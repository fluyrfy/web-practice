import React from "react";
import MyC03 from "./MyC03Child1Modify";
import MyC04 from "./MyC04Child2Photo";

export default class MyC01TodoList extends React.Component {
  constructor() {
    super();
    this.c0 = React.createRef(); // 子組件引用 (父子組件傳遞數據偷懶方法)
    this.state = {
      uname: "蒼茫大地",
    };
  }
  ud = (newUname) => {
    let uname = this.state.uname;
    uname = newUname;
    this.setState({
      uname,
    });
  };
  render() {
    return (
      <div style={{ background: "#dfc" }}>
        <h3 ref={this.c0}>{this.state.uname}的博客</h3>
        <hr />
        <MyC03 ud={this.ud}></MyC03>
        <MyC04 unameInChild={this.state.uname}></MyC04>
      </div>
    );
  }
}
