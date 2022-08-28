import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uname: "dangdang",
    };
  }
  doChange = (userInput) => {
    console.log(userInput);
    this.setState({
      uname: userInput,
    });
  };
  render() {
    return (
      <View>
        <TextInput placeholder="請輸入密碼" secureTextEntry={true} />
        <TextInput style={{ borderWidth: 1 }} multiline={true} />
        <TextInput value={this.state.uname} onChangeText={this.doChange} />
      </View>
    );
  }
}
