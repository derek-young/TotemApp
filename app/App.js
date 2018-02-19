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

import ContactES from './components/SpeedDial/EmergencyServices/ContactES';
import PlaceTotem from './components/SpeedDial/PlaceTotem/PlaceTotem';
import RemoveTotem from './components/SpeedDial/RemoveTotem/RemoveTotem';
import SpeedDial from './components/SpeedDial/SpeedDial';

import { handleAuthStateChange } from './redux/actions';

// Initialize Firebase
import './firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlaceTotem: false,
      showRemoveTotem: false,
      showAlertFriends: false,
      showContactES: false
    };

    this.closePlaceTotem = () => this.closePopover('showPlaceTotem');
    this.closeRemoveTotem = () => this.closePopover('showRemoveTotem');
    this.closeAlertFriends = () => this.closePopover('showAlertFriends');
    this.closeContactES = () => this.closePopover('showContactES');
    this.openRemoveTotem = () => this.openPopover('showRemoveTotem');
    this.openAlertFriends = () => this.openPopover('showAlertFriends');
    this.openContactES = () => this.openPopover('showContactES');
  }

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
      history,
      location: { pathname },
    } = this.props;

    const {
      showPlaceTotem,
      showRemoveTotem,
      showAlertFriends,
      showContactES
    } = this.state;

    const isSetupView = (pathname === '/choose-venue' || pathname === '/create-group');

    return (
      <View style={styles.container}>
        {(authenticated && dataRetrieved) && <Header isSetupView={isSetupView} />}
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
          component={() => this.createLinearGradient(CreateGroup)}
        />
        <Menu history={history} />
        {
          (authenticated && dataRetrieved && !isSetupView) &&
          <SpeedDial
            openPlaceTotem={this.openPlaceTotem}
            openRemoveTotem={this.openRemoveTotem}
            openAlertFriends={this.openAlertFriends}
            openContactES={this.openContactES}
          />
        }
        {showPlaceTotem && <PlaceTotem close={this.closePlaceTotem} />}
        {showRemoveTotem && <RemoveTotem close={this.closeRemoveTotem} />}
        {showContactES && <ContactES close={this.closeContactES} />}
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

  closePopover = popover => (
    this.setState({
      [popover]: false
    })
  )

  openPopover = popover => (
    this.setState({
      [popover]: true
    })
  )

  openPlaceTotem = () => {
    const { location, history } = this.props;

    if (location.pathname !== '/map') history.push('/map');

    this.setState({
      showPlaceTotem: true
    });
  }
}

export default withRouter(connect(({ auth, user }) => ({
  authenticated: auth.authenticated,
  dataRetrieved: user.dataRetrieved,
}))(App));
