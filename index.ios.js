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
import MapViewer from './app/components/MapViewer/MapViewer';
import Group from './app/components/Group/Group';
import Agenda from './app/components/Agenda/Agenda';
import Schedule from './app/components/Schedule/Schedule';

export default class TotemApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <NativeRouter>
            <Route path="/" component={App} />
          </NativeRouter>
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TotemApp', () => TotemApp);
