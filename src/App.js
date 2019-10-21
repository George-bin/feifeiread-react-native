/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'mobx-react';
import Router from './router';
// 获取mobx-store实例
import store from './store';

const App = () => {
  return (
    <Provider rootStore={store}>
      {/*screenProps={{ statusBarHeight: StatusBar.currentHeight}}*/}
      <Router />
    </Provider>
  );
};

export default App;
