import store from '../../redux/store';
import {
  addUserListener,
  firebaseKeyGen,
  firebaseOnce,
  firebaseRemove,
  firebaseSet,
  firebaseUpdate,
  updateUserGroupID,
  updateVenue
} from '../actions';

const { dispatch } = store;

export function createGroup(groupName) {
  const { user, group } = store.getState();
  const updates = {};
  const groupKey = firebaseKeyGen('/groups/');

  group.groupName = groupName;
  group.memberKeys[user.uid] = user.name;
  updates[`/groups/${groupKey}`] = group;

  firebaseSet(`/users/${user.uid}/groupId`, groupKey);

  return firebaseUpdate(updates)
  .then(() => updateUserGroupID(groupKey));
}

export function removeUserFromGroup() {
  const { user, group: { memberKeys }} = store.getState();
  const memberCount = Object.keys(memberKeys).length;

  if (memberCount === 1) {
    console.log('groupid',user.groupId)
    firebaseRemove(`groups/${user.groupId}`);
  } else {
    firebaseRemove(`groups/${user.groupId}/memberKeys/${user.uid}`);
  }

  firebaseRemove(`users/${user.uid}/groupId`);
  updateUserGroupID('');
  resetGroup();
}

function resetGroup() {
  return dispatch({
    type: 'RESET_GROUP'
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

export function updateGroupMember(user, uid) {
  return dispatch({
    type: 'UPDATE_GROUP_MEMBER',
    payload: { user, uid }
  });
}

export function updateVenueId(id) {
  return dispatch({
    type: 'UPDATE_VENUE_ID',
    payload: { id }
  });
}
