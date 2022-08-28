import React from "react";

export default class MyC04 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ background: "#fdc", padding: "10px", marginTop: "10px" }}>
        <h4>{this.props.unameInChild}的照片牆</h4>
        <hr />
      </div>
    );
  }
}
