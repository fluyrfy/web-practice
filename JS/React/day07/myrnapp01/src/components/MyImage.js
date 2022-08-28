//輪播組件
import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

// 把原本寬高各異的圖片統一為寬度為屏幕寬 高度與原圖等比縮放
// 假設屏幕寬為500 原圖為100*50 需要縮放為 500*250
export default class MyImage extends React.Component {
  constructor() {
    super();
    this.state = {
      originWidth: 0, //圖片原始寬度
      originHeight: 0,
      displayWidth: Dimensions.get("window").width - 12, //圖片要顯示出來的高度
      displayHeight: 0, //圖片要顯示出來的高度
    };
  }
  componentDidMount() {
    // 組件掛載完後需要獲取其原始的寬和高 從而計算出要顯示的高度
    Image.getSize(this.props.uri, (w, h) => {
      let displayWidth = this.state.displayWidth;
      let displayHeight = (displayWidth * h) / w;
      this.setState({
        displayHeight: displayHeight,
      });
    });
  }
  render() {
    console.log(this.props.uri);
    return (
      <Image
        source={{ uri: this.props.uri }}
        style={{
          width: this.state.displayWidth,
          height: this.state.displayHeight,
        }}
      />
    );
  }
}

let ss = StyleSheet.create({});
