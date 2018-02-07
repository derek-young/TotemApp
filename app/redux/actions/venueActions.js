import {
  buildScheduleDays,
  firebaseOnce,
  setAgendaForVenue
} from '../actions';
import store from '../../redux/store';

const { dispatch } = store;

export function fetchVenues(callback) {
  return firebaseOnce('/venues', callback);
}

export function resetVenue() {
  return dispatch({
    type: 'RESET_VENUE'
  });
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

  setAgendaForVenue(venue.key);

  if (venue.scheduleItems) {
    buildScheduleDays(Object.values(venue.scheduleItems));
  }

  return dispatch({ type: 'USER_DATA_RETRIEVED' });
}

export function updateVenueNames(venues) {
  return dispatch({
    type: 'UPDATE_VENUE_NAMES',
    payload: { venues }
  });
}

export function getArtist(key) {
  const currentTime = new Date().getTime();
  const { scheduleItems = {} } = store.getState().venue.venue;
  const geoFences = store.getState().venue.geofences;
  const userGeofence = geoFences[key];

  const itemsArray = Object.values(scheduleItems);

  for (let i = 0; i < itemsArray.length; i += 1) {
    const item = itemsArray[i];
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

  return null;
}

function localTimeMilliseconds(milliSeconds) {
  const timeOffset = new Date(milliSeconds).getTimezoneOffset();
  return milliSeconds + (timeOffset * 1000 * 60);
}
