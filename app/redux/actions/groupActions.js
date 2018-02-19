import store from '../../redux/store';
import {
  addUserListener,
  firebaseKeyGen,
  firebaseOnce,
  firebaseRemove,
  firebaseSet,
  firebaseUpdate,
  updateUserGroupKey,
  updateVenue
} from '../actions';

import { idGenerator } from '../../helpers';

const { dispatch } = store;

export function createGroup(groupName) {
  const { user, group } = store.getState();
  const updates = {};
  const groupKey = firebaseKeyGen('/groups/');

  group.groupName = groupName;
  group.memberKeys[user.uid] = user.name;

  // TODO: Temporary solution. Does not check for or handle duplicates
  group.groupId = idGenerator();

  updates[`/groups/${groupKey}`] = group;

  firebaseSet(`/users/${user.uid}/groupKey`, groupKey);

  return firebaseUpdate(updates)
  .then(() => updateUserGroupKey(groupKey));
}

export function removeUserFromGroup() {
  const { user, group: { memberKeys }} = store.getState();
  const memberCount = Object.keys(memberKeys).length;

  if (memberCount === 1) {
    firebaseRemove(`groups/${user.groupKey}`);
  } else {
    firebaseRemove(`groups/${user.groupKey}/memberKeys/${user.uid}`);
  }

  firebaseRemove(`users/${user.uid}/groupKey`);
  updateUserGroupKey('');
  resetGroup();
}

export function resetGroup() {
  return dispatch({
    type: 'RESET_GROUP'
  });
}

export function setMeetupTime(time) {
  dispatch({
    type: 'SET_MEETUP_TIME',
    payload: time
  });

  updateTotemFirebase();
}

export function setUserSort(method) {
  return dispatch({
    type: 'SET_USER_SORT',
    payload: { method }
  });
}

export function updateGroup(group) {
  dispatch({
    type: 'UPDATE_GROUP',
    payload: { group }
  });

  if (group) {
    Object.keys(group.memberKeys).forEach(key => addUserListener(key));

    if (group.venueId) {
      firebaseOnce(`/venues/${group.venueId}`, updateVenue);
    } else {
      // Add code to render map on user's current location

      dispatch({ type: 'USER_DATA_RETRIEVED' });
    }
  } else {
    dispatch({ type: 'USER_DATA_RETRIEVED' });
  }
}

export function updateGroupMember({ user, uid }) {
  const { key: venueId } = store.getState().venue.venue;
  const { agendas } = user;
  let agenda = {};

  if (venueId && agendas) {
    agenda = agendas[venueId] || {};
  }

  // If the user does not have an agenda for this venue,
  // set the agenda property to an empty object
  user.agenda = agenda;

  return dispatch({
    type: 'UPDATE_GROUP_MEMBER',
    payload: { user, uid }
  });
}

export function updateTotemCoords(coords) {
  dispatch({
    type: 'UPDATE_TOTEM_COORDS',
    payload: coords
  });

  updateTotemFirebase();
}

function updateTotemFirebase() {
  const {
    user: { groupKey },
    group: { totem }
  } = store.getState();

  return firebaseSet(`/groups/${groupKey}/totem`, totem);
}

export function updateVenueId(id) {
  return dispatch({
    type: 'UPDATE_VENUE_ID',
    payload: { id }
  });
}
