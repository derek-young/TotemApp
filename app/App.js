import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Route } from 'react-router-native';
import { connect } from 'react-redux';
import styles from './styles';

/* Components */
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Group from './components/Group/Group';
import MapViewer from './components/MapViewer/MapViewer';
import Agenda from './components/Agenda/Agenda';
import Schedule from './components/Schedule/Schedule';

import {
  signInSuccess,
  firebaseOnce,
  getUserData,
  geolocate,
  getFriends
} from './redux/actions';

// Initialize Firebase
require('./firebase');

class App extends Component {
  componentWillMount() {
    // firebase.auth().onAuthStateChanged(user => {
    //   console.log('user on auth state change', user)
    //   if (user) {
    //     geolocate();
    //     signInSuccess(user.uid, user.displayName);
    //     getUserData(user.uid);
    //
    //     // Need FB token
    //     // firebaseOnce('/users', fireUsers => getFriends(fireUsers));
    //   }
    // });
  }

  render() {
    const { menuVisible, menuItems, history } = this.props;

    return (
      <View style={styles.container}>
        <Header />
        <Route path="/map" component={MapViewer} />
        <Route path="/group" component={Group} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/schedule" component={Schedule} />
        {/* <Route path="/choosevenue" component={ChooseVenue}/> */}
        {/* <Route path="/creategroup" component={CreateGroup}/> */}
        {menuVisible && <Menu menuItems={menuItems} history={history} />}
      </View>
    );
  }
}

export default connect((store) => ({
  menuVisible: store.menu.menuVisible,
  menuItems: store.menu.menuItems
}))(App);
