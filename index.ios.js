import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/redux/store';

export default class TotemApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <App />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TotemApp', () => TotemApp);
