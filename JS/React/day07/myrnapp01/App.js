import React, { Fragment } from "react";
import {} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/components/LoginScreen";
import MainScreen from "./src/components/MainScreen";
import ProductListScreen from "./src/components/ProductListScreen";
import ProductDetailScreen from "./src/components/ProductDetailScreen";
import UserDetailScreen from "./src/components/UserDetailScreen";
import UserListScreen from "./src/components/UserListScreen";

//創建路由辭典 棧式導航器
let routes = createStackNavigator({
  login: LoginScreen,
  main: MainScreen,
  productList: ProductListScreen,
  productDetail: ProductDetailScreen,
  userList: UserListScreen,
  userDetail: UserDetailScreen,
});

// 創建根組件 用於盛放其他組件 並註冊路由辭典
export default createAppContainer(routes);
