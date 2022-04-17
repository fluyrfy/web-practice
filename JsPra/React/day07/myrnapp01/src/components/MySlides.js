//輪播組件
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

export default class MySlides extends React.Component {
  timer = null;

  constructor() {
    super();
    this.state = {
      curIndex: 0, //當前要顯示的輪播圖片下標
    };
  }

  render() {
    // console.log(this.props.picList); //異步獲取的屬性值第一次渲染其值為undefined
    if (this.props.picList) {
      if (this.timer == null) {
        //因為每次修改圖片(修改狀態數據)都會啟動render 由此來判斷若定時器尚未啟動 啟動一次即可
        this.timer = setInterval(() => {
          let curIndex = this.state.curIndex;
          curIndex++;
          if (curIndex >= this.props.picList.length) {
            curIndex = 0;
          }
          this.setState({ curIndex });
        }, 2000);
      }
      return (
        <View>
          <Image
            style={ss.fullWidth}
            source={{
              uri:
                "http://www.codeboy.com:9999/" +
                this.props.picList[this.state.curIndex].md,
            }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Image
            source={require("../assets/loading.jpg")}
            style={ss.fullWidth}
          />
        </View>
      );
    }
  }
  componentWillUnmount() {
    //組件即將卸載時
    //相較於timeout 這裡一定要清除定時器以免發生內存洩漏
    clearInterval(this.timer);
  }
}

let ss = StyleSheet.create({
  fullWidth: {
    width: Dimensions.get("window").width - 12, //減去padding才不會溢出
    height: Dimensions.get("window").width - 12,
  },
});
