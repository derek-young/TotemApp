import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

/*  Components  */
import MapViewer from './MapViewer/MapViewer';
import ChooseVenue from './InitConfig/ChooseVenue';
import Auth from './Auth/Auth';
import Loading from './Auth/Loading';

class HomeView extends Component {
  render() {
    const { auth, user } = this.props;
    const hasGroup = !!user.groupId;

    return (
      !auth.authenticated ? this.createLinearGradient(Auth) :
      !user.dataRetrieved ? this.createLinearGradient(Loading) :
      !hasGroup ? <ChooseVenue /> : <MapViewer />
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

export default connect(store => ({
  user: store.user,
  auth: store.auth
}))(HomeView);
