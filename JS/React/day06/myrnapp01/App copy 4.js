import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  doPress = () => {
    console.log("文本被點擊一次");
    let count = this.state.count;
    count++;
    this.setState({
      count,
    });
  };
  render() {
    return (
      <View>
        <Text onPress={this.doPress}>
          您已經按壓此段文本次數:{"\n"}
          {this.state.count}
        </Text>
        <Text style={{ fontSize: 30 }} ellipsizeMode="tail" numberOfLines={5}>
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Text>
      </View>
    );
  }
}
