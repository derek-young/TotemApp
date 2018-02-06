import store from '../../redux/store';

const { dispatch } = store;

export function setVenueSortOption(key) {
  return dispatch({
    type: 'SET_VENUE_SORT_OPTION',
    payload: key
  });
}
