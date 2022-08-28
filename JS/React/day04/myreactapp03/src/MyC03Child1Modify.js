import React from "react";

export default class MyC03 extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }
  md = (e) => {
    let userInput = this.state.userInput;
    userInput = e.target.value;
    this.setState({
      userInput,
    });
  };
  change = () => {
    this.props.ud(this.state.userInput);
    this.setState({
      userInput: "",
    });
  };
  render() {
    return (
      <div style={{ background: "#ccf", padding: "5px" }}>
        <input value={this.state.userInput} onChange={this.md} />
        <button type="" onClick={this.change}>
          修改我的簽名
        </button>
      </div>
    );
  }
}
