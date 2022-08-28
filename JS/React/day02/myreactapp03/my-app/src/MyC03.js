import React from "react";

export default class MyC03 extends React.Component {
  // React中class組件可以聲明兩種形式的Model數據:
  // 1. class屬性數據, 一次性綁定到模板, 數據再變也不會修改模板視圖
  count = 3; //Model數據, 模型數據
  //2. 組件狀態數據, 可以綁定到模板, 未來Model變則View變
  constructor(props, context) {
    super();
    // 聲明狀態數據
    this.state = {
      uname: "dangdang",
      age: 30,
      salary: 15000,
      count: 3,
    };
  }
  add = () => {
    // 狀態數據不能這樣修改-不會導致試圖重新修改
    // this.state.count++;
    let count = this.state.count;
    count++;
    // setState是異步函數, 修改DOM樹可能會有多次 因此等到最後統計所有修改的動作 合併為一次的修改操作 因此盡量先聲名變量來存放狀態屬性而不是直接修改 否則合併後只會修改一次
    this.setState({
      count: count,
    });
  };
  minus = () => {
    // this.state.count--;
    let count = this.state.count;
    count--;
    this.setState({
      count: count,
    });
  };
  render() {
    return (
      <div>
        <button type="" onClick={this.minus}>
          -
        </button>
        <span>{this.state.count}</span>
        <button type="" onClick={this.add}>
          +
        </button>
        <hr />
        <p>姓名: {this.state.uname}</p>
        <p>年齡: {this.state.age}</p>
        <p>薪資: {this.state.salary}</p>
      </div>
    );
  }
}
