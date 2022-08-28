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
//ReactNavigation提供了兩個核心功能函數
import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "./src/components/LoginScreen";
import MainScreen from "./src/components/MainScreen";

// 創建路由辭典 稱為棧式導航器
let routes = createStackNavigator({
  login: LoginScreen,
  main: MainScreen,
});

//創建整個應用的根組件，註冊路由辭典
export default createAppContainer(routes);
