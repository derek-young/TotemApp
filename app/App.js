import React, { Component } from 'react';
import { View } from 'react-native';
import { withRouter, Route } from 'react-router-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

/* Components */
import Agenda from './components/Agenda/Agenda';
import CreateGroup from './components/InitConfig/CreateGroup';
import ChooseVenue from './components/InitConfig/ChooseVenue';
import Group from './components/Group/Group';
import Header from './components/Header/Header';
import HomeView from './components/HomeView';
import MapViewer from './components/MapViewer/MapViewer';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/Auth/PrivateRoute';
import Schedule from './components/Schedule/Schedule';

import { handleAuthStateChange } from './redux/actions';

// Initialize Firebase
import './firebase';

class App extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
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
      history,
      location: { pathname }
    } = this.props;

    return (
      <View style={styles.container}>
        {(authenticated && dataRetrieved) && <Header path={pathname} />}
        <Route exact path="/" component={HomeView}/>
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/map"
          component={MapViewer}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/group"
          component={() => this.createLinearGradient(Group)}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/agenda"
          component={() => this.createLinearGradient(Agenda)}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/schedule"
          component={() => this.createLinearGradient(Schedule)}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/profile"
          component={() => this.createLinearGradient(Profile)}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/choose-venue"
          component={ChooseVenue}
        />
        <PrivateRoute
          isAuthenticated={authenticated}
          path="/create-group"
          component={CreateGroup}
        />
        {menuVisible && <Menu menuItems={menuItems} history={history} />}
      </View>
    );
  }

  createLinearGradient = Child => (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      colors={[ '#ffe482', 'rgba(255, 120, 113, 0.5)' ]}
    >
      <Child />
    </LinearGradient>
  )
}

export default withRouter(connect(({ auth, menu, user }) => ({
  authenticated: auth.authenticated,
  dataRetrieved: user.dataRetrieved,
  menuVisible: menu.menuVisible,
  menuItems: menu.menuItems
}))(App));
