import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

class MainScreen extends React.Component {
  //配置頁頭
  static navigationOptions = {
    title: "主菜單",
    headerRight: (
      <TouchableOpacity>
        <Image
          source={require("../assets/user.png")}
          style={{ width: 36, height: 36, borderRadius: 18 }}
        />
      </TouchableOpacity>
    ),
  };

  render() {
    return (
      // <View>
      //   <Text>主菜單</Text>
      //   <TouchableOpacity onPress={this.jumpToList}>
      //     <Image source={require("../assets/menu_product.jpg")} />
      //   </TouchableOpacity>
      // </View>
      <View>
        {/* 統計信息 */}
        <View style={ss.stat}>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>上架商品總數</Text>
              <Text style={[ss.textLg, ss.textSuccess]}>24,380</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>+128%較上月</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>上架商品總數</Text>
              <Text style={[ss.textLg, ss.textSuccess]}>24,380</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>+128%較上月</Text>
            </View>
          </View>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>註冊用戶總數</Text>
              <Text style={[ss.textLg, ss.textDanger]}>1,965</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>-50%較上月</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>當日PC端PV量</Text>
              <Text style={[ss.textLg, ss.textDanger]}>14,281</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>-50%較昨日</Text>
            </View>
          </View>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>移動端PV量</Text>
              <Text style={[ss.textLg, ss.textDanger]}>29,315</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>-34%較昨日</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>APP總下載量</Text>
              <Text style={[ss.textLg, ss.textSuccess]}>7,422</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>+18%較上週</Text>
            </View>
          </View>
        </View>
        {/* 功能菜單 */}
        <View style={ss.menu}>
          <View style={ss.row}>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity onPress={this.jumpToList}>
                <Image source={require("../assets/menu_product.jpg")} />
                <Text style={(ss.textMd, ss.textPrimary)}>商品管理</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity>
                <Image source={require("../assets/menu_user.jpg")} />
                <Text style={(ss.textMd, ss.textPrimary)}>用戶管理</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ss.menu}>
            <View style={ss.row}>
              <View style={[ss.col, ss.menuCol]}>
                <TouchableOpacity>
                  <Image source={require("../assets/menu_order.jpg")} />
                  <Text style={(ss.textMd, ss.textPrimary)}>訂單管理</Text>
                </TouchableOpacity>
              </View>
              <View style={[ss.col, ss.menuCol]}>
                <TouchableOpacity>
                  <Image source={require("../assets/menu_refresh.jpg")} />
                  <Text style={(ss.textMd, ss.textPrimary)}>首頁管理</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  jumpToList = () => {
    this.props.navigation.navigate("productList");
  };
  jumpToUser = () => {
    this.props.navigation.navigate("user");
  };
}

export default MainScreen;

let ss = StyleSheet.create({
  stat: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1, //每一列各佔50%
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#85939d",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  textLg: {
    fontSize: 26,
    paddingVertical: 5,
  },
  textMd: {
    fontSize: 18,
    paddingVertical: 4,
  },
  textSm: {
    fontSize: 16,
    paddingVertical: 3,
  },
  textPrimary: {
    color: "#85939d",
  },
  textDanger: {
    color: "#e74c3c",
  },
  textSuccess: {
    color: "#1abb9c",
  },
  menuCol: {
    // borderWidth: 0, 不能覆蓋borderbottomwidth
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 15,
  },
});
