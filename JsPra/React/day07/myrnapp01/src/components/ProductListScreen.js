import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  ActivityIndicator,
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

class ProductListScreen extends React.Component {
  static navigationOptions = {
    title: "商品列表",
  };
  pno = 0; //不須渲染的數據可放在構造屬性中聲明 即不須set get操作
  // hasMore = true;
  constructor() {
    super();
    this.state = {
      productList: [], //商品列表
      // pno: 0,  //當前頁號
      hasMore: true,
    };
  }
  componentDidMount() {
    this.loadMore();
  }
  _renderItem = (data) => {
    // console.log(data);
    let p = data.item;
    let host = "http://www.codeboy.com:9999/";
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: host + p.pic }}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text numberOfLines={1}>{p.title}</Text>
          <Text style={{ color: "red" }}>單價： {p.price}</Text>
        </View>
        <Button
          onPress={() => {
            this.props.navigation.navigate("productDetail", {
              pid: p.lid,
            });
          }}
          style={{ height: 16 }}
          title="查看詳情"
        />
      </TouchableOpacity>
    );
  };
  _keyExtractor = (p, i) => {
    return String(i);
  };
  _itemSeparatorComponent = () => {
    return (
      <View style={{ height: 0, borderTopWidth: 1, marginVertical: 15 }} />
    );
  };
  loadMore = () => {
    if (!this.state.hasMore) {
      return;
    }
    const that = this;
    //加載更多商品
    this.pno++;
    let url =
      "http://www.codeboy.com:9999/data/product/list.php?pno=" + this.pno;
    fetch(url)
      .then((res) => res.json())
      .then((body) => {
        let productList = this.state.productList;
        productList = productList.concat(body.data);
        this.setState({ productList });
        console.log(body);
        console.log(this.pno);
        if (this.pno == body.pageCount) {
          this.setState({ hasMore: false });
          // console.log(this.hasMore);
        }
        console.log(this.state.hasMore);
      })
      .catch((err) => console.log(err));
  };
  _listFooterComponent = () => {
    // console.log("創建底部組件");
    // console.log(this.state.hasMore);
    if (!this.state.hasMore) {
      return <Button title="已經沒有更多數據了" disabled />;
    } else {
      return <ActivityIndicator size="large" />;
    }
  };
  jumpToDetail = () => {
    this.props.navigation.navigate("productDetail", { pid: 8 });
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.productList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          onEndReached={this.loadMore}
          ListFooterComponent={this._listFooterComponent}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

export default ProductListScreen;

let ss = StyleSheet.create({});
