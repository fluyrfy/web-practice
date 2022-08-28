import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ color: "#f00", fontSize: 50, paddingVertical: 50 }}>
          Hello
        </Text>
        <Text style={[ss.success, ss.textRight, { fontSize: 30 }]}>
          我是廖昱帆
        </Text>
      </View>
    );
  }
}

let ss = StyleSheet.create({
  success: {
    color: "#0f0",
    fontSize: 16,
    borderColor: "#666",
    backgroundColor: "pink",
  },
  textRight: {
    textAlign: "right",
  },
});
