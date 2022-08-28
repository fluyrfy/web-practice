import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      laptopList: [
        {
          lid: 100,
          title: "筆記本標題0",
          pic: require("./src/assets/laptop1.jpg"),
          price: 500,
        },
        {
          lid: 101,
          title: "筆記本標題1",
          pic: require("./src/assets/laptop2.jpg"),
          price: 500,
        },
        {
          lid: 102,
          title: "筆記本標題2",
          pic: require("./src/assets/laptop3.jpg"),
          price: 500,
        },
        {
          lid: 103,
          title: "筆記本標題3",
          pic: require("./src/assets/laptop4.jpg"),
          price: 500,
        },
      ],
    };
  }

  _renderItem = (obj) => {
    //如何渲染一個列表項
    console.log("正在渲染一個列表項");
    // obj: {item:'新聞1', index: 0}
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image source={obj.item.pic} style={{ width: 80, height: 80 }} />
          <View style={{ flex: 1 }}>
            <Text>{obj.item.title}</Text>
            <Text>{obj.item.price}</Text>
          </View>
          <Button title="查看詳情" />
        </TouchableOpacity>
      </View>
    );
  };

  _keyExtractor = (item, index) => {
    //返回每個列表項的key(必須是string), 實務上不推薦使用index 可使用員工編號例如item.eid
    return String(item.lid);
  };
  _ListHeaderComponent = () => {
    return <Text style={{ textAlign: "center" }}>筆記本列表</Text>;
  };
  _ListFooterComponent = () => {
    return <ActivityIndicator size="large" />;
  };
  _itemSeparatorComponent = () => {
    return (
      //高度為0 只有上邊框 充當分隔條
      <View style={{ height: 0, borderTopWidth: 1, marginVertical: 10 }} />
    );
  };
  _onEndReached = () => {
    console.log("滾動到列表尾部了");
  };

  componentDidMount() {}
  render() {
    return (
      <View>
        {/* _方法名:約定俗成 須有一個同名的方法 且不是自身調用 由屬性自己調用 */}
        <FlatList
          onEndReachedThreshold={0.1}
          onEndReached={this._onEndReached}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          ListHeaderComponent={this._ListHeaderComponent}
          ListFooterComponent={this._ListFooterComponent}
          data={this.state.laptopList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
