import store from '../../redux/store';

const { dispatch } = store;

export function clearCallouts() {
  return dispatch({
    type: 'CLEAR_CALLOUTS'
  });
}

export function resetMap() {
  return dispatch({
    type: 'RESET_MAP'
  });
}

export function showUserOnMap({ uid, show = true }) {
  return dispatch({
    type: 'SHOW_USER_ON_MAP',
    payload: { uid, show }
  });
}
