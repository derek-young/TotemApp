import axios from 'axios';
import firebase from 'firebase';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

import {
  firebaseOn,
  firebaseOnce,
  firebaseSet,
  firebaseSignout,
  fetchVenues,
  geolocate,
  resetGroup,
  resetMap,
  resetSchedule,
  resetUser,
  resetVenue,
  setVenues,
  updateGroup,
  updateUserData
} from '../actions';

import store from '../../redux/store';

const { dispatch } = store;

export function signout() {
  return firebaseSignout().then(() => {
    resetGroup();
    resetMap();
    resetSchedule();
    resetUser();
    resetVenue();

    return dispatch({
      type: 'RESET_AUTH'
    });
  });
}

export function signin() {
  signinInProgress();

  LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
  .then(fbSigninSuccess)
  .catch(err => console.log('Error on logInWithReadPermissions', err));
}

function fbSigninSuccess(fbSigninResult) {
  if (!fbSigninResult.isCancelled) {
    signInFirebase();
  }
}

function signInFirebase() {
  return AccessToken.getCurrentAccessToken()
  .then(({ accessToken }) => {
    const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);

    return firebase.auth().signInWithCredential(credential)
    .then(result => fireSigninSuccess(result, accessToken))
    .catch(err => console.log('Error on Firebase Auth', err));
  })
  .catch(err => console.log('Error on getCurrentAccessToken', err));
}

function fireSigninSuccess(result, accessToken) {
  const { uid, displayName, email, photoURL, providerData } = result;

  firebaseSet(`users/${uid}/name`, displayName)
  .then(() => firebaseSet(`users/${uid}/facebookUID`, providerData[0].uid))
  .then(() => firebaseSet(`users/${uid}/img`, photoURL))
  .then(() => firebaseSet(`users/${uid}/email`, email))
  .then(() => firebaseSet(`users/${uid}/lastTimeLoggedIn`, firebase.database.ServerValue.TIMESTAMP))
  .then(() => firebaseOnce('/users', fireUsers => fireUsers)) // get users
  .then(fireUsers => getFriends({ uid, accessToken, fireUsers }))
  .catch(error => console.log('Error setting props', error));
}

function getFriends({ uid, accessToken, fireUsers }) {
  const endpoint = `https://graph.facebook.com/me/friends?access_token=${accessToken}`;

  return axios.get(endpoint).then((facebookData) => {
    const facebookFriends = facebookData.data.data;
    const facebookUIDandFirebaseKey = {};
    const friendsWithAccounts = {};

    // FacebookUID: FirebaseKey
    Object.keys(fireUsers).forEach(key => (
      facebookUIDandFirebaseKey[fireUsers[key].facebookUID] = key
    ));

    for (let i = 0; i < facebookFriends.length; i += 1) {
      if (facebookUIDandFirebaseKey[facebookFriends[i].id]) {
        friendsWithAccounts[facebookUIDandFirebaseKey[facebookFriends[i].id]] = true;
      }
    }

    // saves user friends in the database
    return firebaseSet(`users/${uid}/friends`, friendsWithAccounts);
  }).catch((error) => {
    console.log('Error getting friends from facebook', error);
  });
}

export function handleAuthStateChange({ uid }) {
  geolocate();
  getUserData(uid);

  // firebaseOnce('/users', fireUsers => getFriends(fireUsers));
  AccessToken.getCurrentAccessToken()
  .then(({ accessToken }) => {
    const config = {
      parameters: {
        fields: { string: 'picture.type(large)' },
        access_token: { string: accessToken.toString() }
      }
    };

    const infoRequest = new GraphRequest('/me', config, updateData);

    new GraphRequestManager().addRequest(infoRequest).start();
  });

  function updateData(err, res) {
    if (err) {
      console.log('Graph request error: ', err)
      setLastLoggedIn();
    } else {
      const { picture } = res;
      const { url } = picture.data;

      firebaseSet(`users/${uid}/img`, url)
      .then(setLastLoggedIn);
    }
  }

  function setLastLoggedIn() {
    firebaseSet(
      `users/${uid}/lastTimeLoggedIn`,
      firebase.database.ServerValue.TIMESTAMP
    )
    .then(() => signinSuccess({ uid }));
  }
}

function signinInProgress() {
  return dispatch({ type: 'AUTHENTICATING' });
}

function signinSuccess({ uid }) {
  return dispatch({
    type: 'SIGNIN_SUCCESS',
    payload: { uid }
  });
}

function getUserData(uid) {
  return firebaseOnce(`users/${uid}`, data => {
    const hasGroup = !!data.groupKey;

    updateUserData(data);

    if (hasGroup) {
      // Add listener to group for changes
      firebaseOn(`/groups/${data.groupKey}`, updateGroup);
    }

    return fetchVenues(venues => {
      setVenues(venues);

      if (!hasGroup) {
        dispatch({ type: 'USER_DATA_RETRIEVED' });
      }
    });
  });
}
