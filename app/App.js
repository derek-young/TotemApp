import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { withRouter, Route } from 'react-router-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import styles from './styles';

/* Components */
import Agenda from './components/Agenda/Agenda';
import Auth from './components/Auth/Auth';
import Group from './components/Group/Group';
import Header from './components/Header/Header';
import HomeView from './components/HomeView';
import MapViewer from './components/MapViewer/MapViewer';
import Menu from './components/Menu/Menu';
import PrivateRoute from './components/Auth/PrivateRoute';
import Schedule from './components/Schedule/Schedule';

import { handleAuthStateChange } from './redux/actions';

// Initialize Firebase
import './firebase';

class App extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log('user on auth state change', user)
      if (user) {
        handleAuthStateChange(user);
      }
    });
  }

  render() {
    const {
      authenticated,
      dataRetrieved,
      menuVisible,
      menuItems,
      history
    } = this.props;

    return (
      <View style={styles.container}>
        {(authenticated && dataRetrieved) && <Header />}
        <Route exact path="/" component={HomeView}/>
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/map"
          component={MapViewer}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/group"
          component={Group}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/agenda"
          component={Agenda}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/schedule"
          component={Schedule}
        />
        {/* <Route path="/choosevenue" component={ChooseVenue}/> */}
        {/* <Route path="/creategroup" component={CreateGroup}/> */}
        {menuVisible && <Menu menuItems={menuItems} history={history} />}
      </View>
    );
  }
}

export default withRouter(connect(({ auth, menu, user }) => ({
  authenticated: auth.authenticated,
  dataRetrieved: user.dataRetrieved,
  menuVisible: menu.menuVisible,
  menuItems: menu.menuItems
}))(App));
