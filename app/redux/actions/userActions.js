import store from '../../redux/store';
import {
  firebaseOn,
  firebaseUpdate,
  firebaseRemove,
  updateGroup
} from '../actions';

const { dispatch } = store;

export function addAgendaItem(key) {
  dispatch({
    type: 'ADD_AGENDA_ITEM',
    payload: { key }
  });

  const uid = store.getState().user.uid;
  const updates = {};

  updates[`users/${uid}/agenda/${key}`] = true;

  return firebaseUpdate(updates);
}

export function removeAgendaItem(key) {
  dispatch({
    type: 'REMOVE_AGENDA_ITEM',
    payload: { key }
  });

  const uid = store.getState().user.uid;
  const agendaItemPath = `users/${uid}/agenda/${key}`;

  return firebaseRemove(agendaItemPath);
}

export function updateUserData(user) {
  return dispatch({
    type: 'UPDATE_USER_DATA',
    payload: { user }
  });
}

export function updateUserGroupID(id) {
  dispatch({
    type: 'UPDATE_USER_GROUP_ID',
    payload: { id }
  });

  // Add listener to group changes
  if (id.length) {
    firebaseOn(`/groups/${id}`, updateGroup);
  }
}
