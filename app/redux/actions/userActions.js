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

  const {
    user: { uid },
    venue: { venue: { key: venueId }}
  } = store.getState();
  const updates = {};

  updates[`users/${uid}/agendas/${venueId}/${key}`] = true;

  return firebaseUpdate(updates);
}

export function removeAgendaItem(key) {
  dispatch({
    type: 'REMOVE_AGENDA_ITEM',
    payload: { key }
  });

  const {
    user: { uid },
    venue: { venue: { key: venueId }}
  } = store.getState();
  const agendaItemPath = `users/${uid}/agendas/${venueId}/${key}`;

  return firebaseRemove(agendaItemPath);
}

export function resetUser() {
  return dispatch({
    type: 'RESET_USER'
  });
}

export function setAgendaForVenue(venueKey) {
  const { agendas } = store.getState().user;
  const agenda = agendas[venueKey];

  if (agenda) {
    return dispatch({
      type: 'SET_AGENDA_FOR_VENUE',
      payload: { agenda }
    });
  }
}

export function updateUserData(user) {
  return dispatch({
    type: 'UPDATE_USER_DATA',
    payload: { user }
  });
}

export function updateUserGroupKey(key) {
  dispatch({
    type: 'UPDATE_USER_GROUP_KEY',
    payload: { key }
  });

  // Add listener to group changes
  if (key.length) {
    firebaseOn(`/groups/${key}`, updateGroup);
  }
}
