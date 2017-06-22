import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import styles from './styles';

/* Components */
import Header from './components/Header/Header';
import Group from './components/Group/Group';
import MapViewer from './components/MapViewer/MapViewer';
import Agenda from './components/Agenda/Agenda';
import Schedule from './components/Schedule/Schedule';

export default class App extends Component {
  render() {

    return (
      <NativeRouter>
        <View style={styles.container}>
          <Menu />
          <Header />
          {/* <Route exact path="/" component={HomeView}/> */}
          <Route path="/map" component={MapViewer}/>
          <Route path="/group" component={Group}/>
          <Route path="/agenda" component={Agenda}/>
          <Route path="/schedule" component={Schedule}/>
          {/* <Route path="/choosevenue" component={ChooseVenue}/> */}
          {/* <Route path="/creategroup" component={CreateGroup}/> */}
        </View>
      </NativeRouter>
    );
  }
}
