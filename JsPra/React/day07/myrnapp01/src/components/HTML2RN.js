//輪播組件
import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import MyImage from "./MyImage";

// 把this.props.html中的<img>轉換為<Image/>
export default class HTML2RN extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.html) {
      console.log(this.props.html);
      let list = this.props.html.match(/img\/\S+\.jpg/g);
      console.log(list);
      return (
        <View>
          {list.map((e, i) => {
            // return <Image source={{uri: 'http://www.codeboy.com:9999'+ e}}></Image>
            return <MyImage uri={"http://www.codeboy.com:9999/" + e} key={i} />;
          })}
        </View>
      );
    } else {
      return <Text>內容加載中...</Text>;
    }
  }
}

let ss = StyleSheet.create({
  fullWidth: {
    width: Dimensions.get("window").width - 12, //減去padding才不會溢出
    height: Dimensions.get("window").width - 12,
  },
});
