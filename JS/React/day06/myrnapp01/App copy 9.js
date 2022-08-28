import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <View>
        <Button title="點擊以提交數據" />
        {/* 使用觸摸反饋組件 */}
        <TouchableOpacity>
          <Text style="{{fontSize: 30}}">
            loremLaboris occaecat laboris et Lorem cillum ea sit magna excepteur
            mollit. Incididunt ea nostrud mollit deserunt. Consequat sunt anim
            ex eiusmod qui. Excepteur cillum laboris sint esse. Nulla tempor id
            excepteur voluptate mollit officia deserunt. Nulla pariatur
            consectetur ullamco est deserunt ipsum. Incididunt occaecat sint
            ipsum amet aliquip duis elit cillum.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button title="觸摸反饋按鈕" />
        </TouchableOpacity>
      </View>
    );
  }
}
