import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#dfd", flexDirection: "row" }}>
        <Text style={{ backgroundColor: "#fdd", width: 200 }}>Hello</Text>
        <Text style={{ backgroundColor: "#ddf", width: 300 }}>Blue</Text>
        <Text style={{ backgroundColor: "#dfd" }}>Gray</Text>
      </View>
    );
  }
}
