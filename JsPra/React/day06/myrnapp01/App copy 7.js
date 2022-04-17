import React from "react";
import { View, Image, ActivityIndicator } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: "http://www.codeboy.com:9999/img/index/banner1.png",
      originalWidth: 0, //图片原始宽
      originalHeight: 0, //图片原始高
    };
  }
  componentDidMount() {
    //组件挂载完成后，异步请求图片的尺寸
    Image.getSize(this.state.uri, (w, h) => {
      //异步获取到了图片尺寸，保存为状态数据
      this.setState({
        originalWidth: w,
        originalHeight: h,
      });
    });
  }
  render() {
    return (
      <View>
        <Image
          source={{ uri: this.state.uri }}
          style={{
            width: this.state.originalWidth,
            height: this.state.originalHeight,
          }}
        />

        {/* 活动指示器 (會轉圈的加載圖示)*/}
        <ActivityIndicator />
        <ActivityIndicator size="small" />
        <ActivityIndicator size="large" />
        <ActivityIndicator color="#f00" />
        <ActivityIndicator color="#0f0" />
      </View>
    );
  }
}
