import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyC01 from "./MyC01TodoList";
import MyC02Parent from "./MyC02Parent";
import MyC05 from "./MyC05";

function App() {
  return (
    <div>
      <MyC01></MyC01>
      <hr />
      <MyC02Parent></MyC02Parent>
      <MyC05> </MyC05>
    </div>
  );
}

export default App;
