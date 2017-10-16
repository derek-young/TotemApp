import store from '../../redux/store';
import {
  firebaseOnce,
  firebaseSet,
  updateVenue
} from '../actions';

const { dispatch } = store;

export function updateGroup(group) {
  dispatch({
    type: 'UPDATE_GROUP',
    payload: { group }
  });

  for (let key in group.memberKeys) {
    addUserListener(key);
  }

  if (group.venueId) {
    firebaseOnce('/venues/' + group.venueId, updateVenue);
  } else {
    // Add code to render map on user's current location

    dispatch({ type: 'DATA_RETRIEVED_FROM_FIREBASE' });
  }
}
