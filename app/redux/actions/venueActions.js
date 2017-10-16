import { firebaseOnce } from '../actions';
import store from '../../redux/store';
import MOCK_VENUE_DATA from '../../../mock_data/mock_venue_data';

const { dispatch } = store;

export function fetchVenues(callback) {
  return callback(MOCK_VENUE_DATA);
  // return firebaseOnce('/venues', callback);
}

export function setVenues(venues) {
  return dispatch({
    type: 'SET_VENUES',
    payload: venues
  });
}

export function updateVenue(venue) {
  dispatch({
    type: 'UPDATE_VENUE_DATA',
    payload: { venue }
  });

  return dispatch({ type: 'DATA_RETRIEVED_FROM_FIREBASE' });
}

export function updateVenueNames(venues) {
  return dispatch({
    type: 'UPDATE_VENUE_NAMES',
    payload: { venues }
  });
}
