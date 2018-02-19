import moment from 'moment';

import { firebaseKeyGen, firebaseUpdate } from './redux/actions';

export function arrToObj(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.key] = curr;
    return acc;
  }, {});
}

export function objToArray(obj) {
  const result = [];
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    result.push({ ...obj[key], key });
  }

  return result;
}

export function sortByDateAscending(itemA, itemB) {
  const aStart = moment(itemA.startTime).valueOf();
  const bStart = moment(itemB.startTime).valueOf();

  if (aStart > bStart) {
    return 1;
  } else if (aStart < bStart) {
    return -1;
  }

  return 0;
}

export function idGenerator() {
  // Generates an eight-digit, alpha-numeric ID. E.g.: 1QJ4LXGT
  // Total possible combinations: 2.82 x 10^12 or 2.82 trillion
  const ID_LENGTH = 8;
  const characters = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '0'
  ];

  let id = '';

  for (let i = 0; i < ID_LENGTH; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id = id.concat(characters[randomIndex]);
  }

  return id;
}



/*
  Temporary Helpers while admin backend does not exist
  TODO: Remove for production
*/

export function createVenue(venue) {
  const updates = {};
  const venueKey = firebaseKeyGen('/venues/');

  venue.key = venueKey;

  updates[`/venues/${venueKey}`] = venue;

  return firebaseUpdate(updates);
}

export function createGeofence() {
  const venueId = '-Kyxi4H_sDVWV0FaXQrD'; // Coachella
  const geofenceKey = firebaseKeyGen(`/venues/${venueId}/geofences`);
  const updates = {};

  updates[`/venues/${venueId}/geofences/${geofenceKey}`] = {
    lat: 33.68437820802031,
    lng: -116.23561073094606,
    name: 'Outdoor Theatre',
    radius: 50,
    type: 'venue',
  };

  return firebaseUpdate(updates);
}

export function createScheduleItem(scheduleItem) {
  const venueId = 'wondergrass';
  const scheduleItemKey = firebaseKeyGen(`/venues/${venueId}/scheduleItems`);
  const updates = {};
  const url =`/venues/${venueId}/scheduleItems/${scheduleItemKey}`;

  updates[url] = scheduleItem;

  return firebaseUpdate(updates);
}
