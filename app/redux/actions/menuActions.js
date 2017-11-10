import store from '../store';

const { dispatch } = store;

export function toggleMenu() {
  return dispatch({
    type: 'TOGGLE_MENU',
  });
}
