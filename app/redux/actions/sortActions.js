import { getGeofence } from './locationActions';
import store from '../../redux/store';

export const userSortMethods = {
  alphaAZ: sortAZ,

  alphaZA: sortZA,

  geofence: function sortGeofence(a, b) {
    const fenceA = getGeofence(a.position).name;
    const fenceB = getGeofence(b.position).name;

    if(fenceA < fenceB) return -1;
    if(fenceA > fenceB) return 1;
    return 0;
  },

  proximity: function sortProximity(a, b) {
    const users = store.getState().group.members;
    const uid = store.getState().user.uid;
    const userCoords = users[uid].position;
    const aDiff = getDistance(userCoords, a.position);
    const bDiff = getDistance(userCoords, b.position);

    return aDiff - bDiff;
  }
};

export const venueSortMethods = {
  upcoming: function sortByUpcoming(a, b) {
    return a.dates.startDate - b.dates.startDate;
  },

  alphaAZ: sortAZ,

  alphaZA: sortZA,
};

function getDistance(base, target) {
  return Math.abs(base.lat - target.lat) + Math.abs(base.lng - target.lng);
}

function sortAZ(a, b) {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}

function sortZA(a, b) {
  if(a.name > b.name) return -1;
  if(a.name < b.name) return 1;
  return 0;
}
