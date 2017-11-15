import { firebaseOnce, firebaseUpdate, firebaseKeyGen } from '../actions';
import store from '../../redux/store';

const { dispatch } = store;

function createVenue(venue) {
  const updates = {};
  const venueKey = firebaseKeyGen('/venues/');

  venue.key = venueKey;

  updates[`/venues/${venueKey}`] = venue;

  return firebaseUpdate(updates);
}

export function fetchVenues(callback) {
  return firebaseOnce('/venues', callback);
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

export function getArtist(key) {
  const currentTime = new Date().getTime();
  const scheduleItems = store.getState().venue.venue.scheduleitems;
  const geoFences = store.getState().venue.geofences;
  const userGeofence = geoFences[key];

  for (let i = 0; i < scheduleItems.length; i += 1) {
    const item = scheduleItems[i];
    if (userGeofence && item) {
      if (userGeofence.name === item.geofence) {
        const startTime = localTimeMilliseconds(Date.parse(item.starttime));
        const endTime = localTimeMilliseconds(Date.parse(item.endtime));
        const timeInRange = startTime <= currentTime && currentTime < endTime;

        if (timeInRange) {
          return item.name.toProperCase();
        }
      }
    }
  }
}

function localTimeMilliseconds(milliSeconds) {
  const timeOffset = new Date(milliSeconds).getTimezoneOffset();
  return milliSeconds + (timeOffset * 1000 * 60);
}
