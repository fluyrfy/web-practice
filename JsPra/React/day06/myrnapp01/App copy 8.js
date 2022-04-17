import React from "react";
import { View, Switch } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOnline: false,
    };
  }
  doChange = (val) => {
    this.setState({ isOnline: val });
  };
  componentDidMount() {}
  render() {
    return (
      <View>
        {/* 使用開關組件 */}
        <Switch value={this.state.isOnline} onValueChange={this.doChange} />
      </View>
    );
  }
}
