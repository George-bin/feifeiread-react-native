import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
  TextInput,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';

// import { observer, inject } from 'mobx-react';

// @inject('rootStore')
// @observer
export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // 缓存登录态
  handleSaveLoginState () {
    AsyncStorage.setItem('sessionId', '')
  }

  // 设置用户名
  handleSetUsername (text) {
    this.setState({
      username: text
    })
    console.log(text)
  }

  // 设置密码
  handleSetPassword (text) {
    this.setState({
      password: text
    })
  }
  render() {
    return (
      <View>
        <View
          style={{paddingLeft: 40,  paddingRight: 40}}>
          <TextInput
            style={[styles.inpStyle]}
            onChangeText={this.handleSetUsername.bind(this)}
            value={this.state.username}
            placeholder="请输入用户名!">
          </TextInput>
        </View>
        <View
          style={{paddingLeft: 40,  paddingRight: 40}}>
          <TextInput
            style={[styles.inpStyle]}
            onChangeText={this.handleSetPassword.bind(this)}
            value={this.state.password}
            placeholder="请输入密码!">
          </TextInput>
        </View>
        {/*登录按钮*/}
        <View
          style={[styles.loginBtnSection]}>
          <Button
            style={[styles.loginBtn]}
            textStyle={{fontSize: 18, color: 'white'}}
            activeOpacity={0}>
            登录
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inpStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45
  },
  loginBtnSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  loginBtn: {
    width: 120,
    borderColor: 'white',
    backgroundColor: '#4bb8c5',
    borderRadius: 60,
    overflow: 'hidden'
  }
});
