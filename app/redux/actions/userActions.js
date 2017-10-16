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
