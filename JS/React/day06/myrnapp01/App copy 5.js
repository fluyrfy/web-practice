import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Button title="登入" />
        <Button title="註冊" color="#e83" />
        <Button title="禁用" color="#e83" disabled={false} />
      </View>
    );
  }
}
