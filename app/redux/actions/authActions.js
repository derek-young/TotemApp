import axios from 'axios';
import firebase from 'firebase';

import { firebaseOnce, firebaseSet } from '../actions';
import store from '../../redux/store';
const { dispatch } = store;

export function signinSuccess({ uid, name }) {
  return dispatch({
    type: 'SIGNIN_SUCCESS',
    payload: { uid, name }
  });
}

export function signin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  const fbPermissions = ['public_profile', 'email', 'user_friends'];

  dispatch({ type: 'AUTHENTICATING' });

  fbPermissions.forEach(permission => provider.addScope(permission));

  console.log('provider', provider)

  console.log('firebase', firebase)

  firebase.auth().signInWithRedirect(provider)
  .then((result) => {
    console.log('inside signInWithPopup')

    const { user: { uid, displayName, photoURL, email }} = result;
    const { accessToken } = result.credential;

    firebaseSet(`users/${uid}/label`, displayName)
    .then(() => firebaseSet(`users/${uid}/facebookUID`, result.user.providerData[0].uid))
    .then(() => firebaseSet(`users/${uid}/img`, photoURL))
    .then(() => firebaseSet(`users/${uid}/email`, email))
    .then(() => firebaseSet(`users/${uid}/lastTimeLoggedIn`, firebase.database.ServerValue.TIMESTAMP))
    // .then(() => firebaseOnce('/users', fireUsers => fireUsers)) // get users
    // .then(fireUsers => getFriends({ uid, accessToken, fireUsers }))
    .catch(error => console.log('error setting props', error));
  })
  .catch(error => {
    console.log('error in fb auth')
    signInError(error.message)
  });
}

export function getUserData(id) {
  firebaseOnce(`users/${id}`, data => {
    const hasGroup = !!data.groupId;
    console.log('was dispatching initial user data - what is needed?', data)
    // initialUserData(data);
    if (hasGroup) {
      updateUserGroupID(data.groupId);
    }
    setFBUsername(data.facebookUsername)
    // getVenueNames(hasGroup);
  });
}

// function getVenueNames(hasGroup) {
//   firebaseOnce('venues/names', (venues) => {
//     updateVenueNames(venues);
//     if (!hasGroup) {
//       dispatch({ type: 'DATA_RETRIEVED_FROM_FIREBASE' });
//     }
//   });
// }

export function getFriends({ uid, accessToken, fireUsers }) {
  const endpoint = `https://graph.facebook.com/me/friends?access_token=${accessToken}`;

  axios.get(endpoint).then((facebookData) =>{
    const facebookFriends = facebookData.data.data;
    const facebookUIDandFirebaseKey = {};
    const friendsWithAccounts = {};

    // FacebookUID: FirebaseKey
    Object.keys(fireUsers).forEach(key => (
      facebookUIDandFirebaseKey[fireUsers[key].facebookUID] = key
    ));

    for (let i = 0; i < facebookFriends.length; i++) {
      if (facebookUIDandFirebaseKey[facebookFriends[i].id]) {
        friendsWithAccounts[facebookUIDandFirebaseKey[facebookFriends[i].id]] = true;
      }
    }

    //saves user friends in the database
    firebaseSet(`users/${uid}/friends`, friendsWithAccounts);
  }).catch((error) => {
    console.log('Error getting friends from facebook', error);
  });
}
