import React from "react";

export default class MyC04 extends React.Component {
  constructor() {
    super();
    this.state = {
      empList: [
        { eid: 101, ename: "Tom", sex: 1 },
        { eid: 102, ename: "Mary", sex: 1 },
        { eid: 103, ename: "Jerry", sex: 1 },
      ],
    };
  }
  del = (i) => {
    let empList = this.state.empList;
    empList.splice(i, 1);
    this.setState({
      empList: empList,
    });
  };
  render() {
    return (
      <table border="1" width="100%">
        <tbody>
          {/* 綁定狀態數據 */}
          {this.state.empList.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.eid}</td>
                <td>{e.ename}</td>
                <td>{e.sex}</td>
                <td>
                  <button
                    type=""
                    onClick={() => {
                      this.del(i);
                    }}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
