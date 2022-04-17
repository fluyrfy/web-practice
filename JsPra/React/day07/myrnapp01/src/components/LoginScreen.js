import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

class LoginScreen extends React.Component {
  //配置頁頭內容
  static navigationOptions = {
    title: "管理員登入",
  };
  constructor() {
    super();
    this.state = {
      uname: "", //管理用戶名
      upwd: "", //管理用戶密碼
    };
  }
  render() {
    return (
      <View style={ss.box}>
        <TextInput
          placeholder="請輸入管理員用戶名"
          style={ss.input}
          placeholderTextColor="#85939d"
          value={this.state.uname}
          onChangeText={this.doUnameChange}
        />
        <TextInput
          placeholder="請輸入用戶登入密碼"
          placeholderTextColor="#85939d"
          secureTextEntry={true}
          style={ss.input}
          value={this.state.upwd}
          onChangeText={this.doUpwdChange}
        />
        <View style={ss.btnBox}>
          <Button title="登入" style={ss.btn} onPress={this.doLogin} />
        </View>
        <View style={ss.logoBox}>
          <Image source={require("../assets/logo.png")} />
          <Text style={ss.logoTitle}>後臺管理系統</Text>
        </View>
        <Text style={ss.copy}>&copy;2017, 版權所有, CODEBOY.COM</Text>
      </View>
    );
  }

  jumpToMain = () => {
    //可查看app組件在使用當前組件時傳遞了props: navigation
    console.log(this.props);
    this.props.navigation.navigate("main");
  };

  doUnameChange = (uname) => {
    this.setState({ uname });
  };
  doUpwdChange = (upwd) => {
    this.setState({ upwd });
  };
  doLogin = () => {
    let uname = this.state.uname;
    let upwd = this.state.upwd;
    // alert(uname + upwd);
    //向服務器api發起異步請求
    let url = "http://www.codeboy.com:9999/data/user/login.php";
    let body = `uname=${uname}&upwd=${upwd}`;
    let headers = { "Content-Type": "application/x-www-form-urlencoded" };
    fetch(url, {
      method: "POST",
      headers: headers,
      body,
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        if (body.code === 200) {
          this.props.navigation.navigate("main");
        } else {
          alert(body.msg);
        }
        // console.log(body);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default LoginScreen;

let ss = StyleSheet.create({
  box: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#85939d",
    padding: 8,
    color: "#85939d",
  },
  btn: {
    // 給button加margin無效
    marginVertical: 25,
  },
  btnBox: {
    paddingTop: 25,
    paddingBottom: 35,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  logoTitle: {
    fontSize: 30,
    color: "#85939d",
  },
  copy: {
    color: "#85939d",
    textAlign: "center",
    fontSize: 16,
  },
});
