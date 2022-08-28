import React from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsList: ["新聞1", "新聞2", "新聞3", "新聞4"],
    };
  }

  _renderItem = (obj) => {
    //如何渲染一個列表項
    console.log("正在渲染一個列表項");
    // obj: {item:'新聞1', index: 0}
    return (
      <View>
        <TouchableOpacity>
          <Text>
            {obj.index + 1}-{obj.item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _keyExtractor = (item, index) => {
    //返回每個列表項的key(必須是string), 實務上不推薦使用index 可使用員工編號例如item.eid
    return String(index);
  };

  componentDidMount() {}
  render() {
    return (
      <View>
        {/* _方法名:約定俗成 須有一個同名的方法 且不是自身調用 由屬性自己調用 */}
        <FlatList
          data={this.state.newsList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
