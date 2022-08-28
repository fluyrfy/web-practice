import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={ss.grid}>
        {/* 第一行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
        </View>
        {/* 第二行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
        </View>
        {/* 第三行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={ss.textCenter}>上架商品總數</Text>
            <Text style={ss.textCenter}>24,380</Text>
            <Text style={ss.textCenter}>+128%較上月</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

let ss = StyleSheet.create({
  grid: {
    flexDirection: "column", // 都可省略 都為默認
    alignItems: "stretch",
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
    flexDirection: "column",
    borderColor: "#aaa",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  textCenter: {
    textAlign: "center",
  },
});
