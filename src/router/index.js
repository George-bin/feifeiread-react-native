import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import routeConfig from './config';
import TabBarItem from '../common/TabBarItem';

import HomeScreen from '../pages/Home/Home';
import BookrackScreen from '../pages/Bookrack/Bookrack';
import MyScreen from '../pages/My/My';
import BookInfoScreen from '../pages/BookInfo/BookInfo';

const theme = {
  color: '#4bb8c5',
  background: '#f3f3f3',
  fontColor: '#F7F7F7'
};

// const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
const defaultHeaderOpts = {
  headerTitleStyle: {
    flex: 1, // 解决安卓机title不居中
    textAlign: 'center', // 解决安卓机title不居中
    alignSelf: 'center',
    fontSize: 15,
    color: theme.fontColor
  },
  headerStyle: {
    height: 45,
    backgroundColor: theme.color
  },
  headerTitleContainerStyle: {
    left: 56,
    right: 56,
  },
};

// 底部导航栏
const BottomTabNavigator = createBottomTabNavigator(
  {
    Bookrack: BookrackScreen,
    Home: HomeScreen,
    My: MyScreen
  },
  {
    // 首次加载默认路由
    initialRouteName: 'Home',
    // 定义屏幕的默认导航选项
    defaultNavigationOptions: ({navigation}) => {
      const { routeName } = navigation.state;
      // debugger
      return {
        // 设置选项卡中的标题
        tabBarLabel: routeConfig[routeName].tabBarLabel,
        tabBarIcon: ({focused, tintColor}) => {
          return <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={routeConfig[routeName].selectedImage}
            normalImage={routeConfig[routeName].normalImage}
          />
        }
      }
    },
    tabBarOptions: {
      activeTintColor: '#4bb8c5',
      inactiveTintColor: '#707070',
      // 定义tab选项卡中的字体样式
      labelStyle: {
        fontSize: 12
      }
    }
  }
)
// header相关配置需要在这里写
BottomTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  console.log('routeName:', routeName)
  return {
    // ...defaultHeaderOpts,
    title: routeConfig[routeName].headerTitle
  };
};


const AppNavigator = createStackNavigator(
  {
    Tab: BottomTabNavigator,
    BookInfo: BookInfoScreen
  }, {
    initialRouteName: 'Tab',
    // 定义渲染和转换的样式
    mode: 'card',
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        ...defaultHeaderOpts,
        // 是否支持手势关闭屏幕
        gesturesEnabled: true,
        headerBackTitle: null,
        headerTitle: routeConfig[routeName] && routeConfig[routeName].headerTitle,
        // headerBackImage: routeConfig
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      console.log('routeName:', routeName)
      return {
        ...defaultHeaderOpts,
        title: routeConfig[routeName].headerTitle
      };
    }
  }
);

export default createAppContainer(AppNavigator);
