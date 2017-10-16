import React from 'react';
import { connect } from 'react-redux';
import store from '../redux/store.js';
import firebase from 'firebase';

/*  Components  */
import MapViewer from './MapViewer/MapViewer';
import ChooseVenue from './InitConfig/ChooseVenue';
import Auth from './Auth/Auth';
import Loading from './Auth/Loading';

export class HomeView extends React.Component {

  render() {
    const { auth, user } = this.props;
    const hasGroup = !!user.groupId;

    return (
      !auth.authenticated ? <Auth /> :
      !user.dataRetrieved ? <Loading /> :
      !hasGroup ? <ChooseVenue /> : <MapViewer />
    );
  }
}

export default connect(store => ({
  user: store.user,
  auth: store.auth
}))(HomeView);
