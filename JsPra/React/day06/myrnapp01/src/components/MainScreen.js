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

export default class MainScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>這裡是主菜單屏幕</Text>
      </View>
    );
  }
}
