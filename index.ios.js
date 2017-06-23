import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';

import store from './app/redux/store';

/* Components */
import App from './app/App';
import Auth from './app/components/Auth/Auth';
import PrivateRoute from './app/components/Auth/PrivateRoute';

export default class TotemApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={{ flex: 1 }}>
            <PrivateRoute isAuthenticated={false} path="/" component={App} />
            <Route path="/auth" component={Auth} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TotemApp', () => TotemApp);
