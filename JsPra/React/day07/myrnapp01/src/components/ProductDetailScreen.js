import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import HTML2RN from "./HTML2RN";
import MySlides from "./MySlides";
import MyImage from "./MyImage";

class ProductDetailScreen extends React.Component {
  //配置頁頭 靜態空間裡還未有實例 無法用this
  // static navigationOptions = {
  //   title: "商品" + this.props.navigation.getParam("pid") + "的詳情",
  // };
  static navigationOptions = (obj) => {
    return {
      title: "商品" + obj.navigation.getParam("pid", 999) + "的詳情",
    };
  };

  constructor() {
    super();
    this.state = {
      product: {}, //商品信息
    };
  }

  render() {
    let height = Dimensions.get("window").height;
    let width = Dimensions.get("window").width;
    let p = this.state.product; //使用臨時變量保存商品
    return (
      <View style={[{ flex: 1, padding: 6 }]}>
        <ScrollView>
          <Text>產品型號： {p.lname} </Text>
          <View style={ss.hr} />
          <MySlides picList={p.picList} />
          <Text>{p.title}</Text>
          <Text>{p.subtitle}</Text>
          <Text>{p.price}</Text>
          <View style={ss.hr} />
          <HTML2RN html={p.details} />
        </ScrollView>
        {/* <Text>{this.state.body}</Text> */}
        <Button title="刪除商品" />
      </View>
    );
  }
  componentDidMount() {
    //組件掛載完成 讀取前一個路由組件傳遞過來的參數
    //獲得參數的兩個方法
    // console.log(this.props.navigation.state.params);
    let pid = this.props.navigation.getParam("pid", 999); //後面為默認值
    // console.log(pid);
    let url = "http://www.codeboy.com:9999/data/product/details.php?lid=" + pid;
    //使用FetchAPI發起異步請求
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        // console.log(body);
        this.setState({ product: body.details });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default ProductDetailScreen;

let ss = StyleSheet.create({
  hr: {
    height: 0,
    borderTopColor: "#aaa",
    borderTopWidth: 1,
    marginVertical: 6,
  },
});
