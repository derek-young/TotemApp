import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';

import store from './app/redux/store';

/* Components */
import App from './app/App';

export default class Totem extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={{ flex: 1 }}>
            <App />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Totem', () => Totem);
