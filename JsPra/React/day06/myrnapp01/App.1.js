import React from 'react'
import {View,Image} from 'react-native'



export default class App extends React.Component{
  render(){ 
    return (
      <View>
        {/* <Image source="./src/assets/logo.png"/> */}
        {/* 本地图片可以自动识别出宽和高 */}
        <Image source={require('./src/assets/logo.png')} style={{width:336, height:82}}/>

        {/* 远程图片无法自动识别出宽和高 */}
        <Image source={ {uri:'http://www.codeboy.com/img/index/banner1.png'} }  style={{width:100, height:100}}/>
        
        <Image resizeMode="center" source={ {uri:'http://www.codeboy.com/img/index/banner1.png'} }  style={{width:200, height:200}}/>
      </View>
    )
  }
}