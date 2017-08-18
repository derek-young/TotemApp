import store from '../../redux/store';
import {
  firebaseOn,
  firebaseOnce,
  firebaseUpdate,
  firebaseRemove
} from './firebaseActions';
import { updateGroup } from './groupActions';

const { dispatch } = store;

export function updateUserGroupID(id) {
  dispatch({
    type: 'UPDATE_USER_GROUP_ID',
    payload: { id }
  });

  firebaseOn('/groups/' + id, updateGroup);
}

export function initialUserData(user) {
  return dispatch({
    type: 'INITIAL_USER_DATA',
    userData: user
  });
}

export function setFBUsername(name) {
  return dispatch({
    type: 'SET_FB_USERNAME',
    payload: { name }
  });
}
