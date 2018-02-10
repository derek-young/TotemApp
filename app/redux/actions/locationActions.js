import store from '../../redux/store';
import {
  firebaseOn,
  firebaseSet,
  updateGroupMember
} from '../actions';

// Add listener to Firebase for any changes to group - returns the entire group
export function addUserListener(userId) {
  return firebaseOn(`/users/${  userId}`, data => {
    updateGroupMember({ user: data, uid: userId });
  });
};

export function geolocate() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  setInterval(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, 10000);

  function success(pos) {
    const uid = store.getState().user.uid;
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const geofence = getGeofence({ lat, lng });

    if (uid) {
      firebaseSet(`users/${uid}/geofence`, geofence);
      firebaseSet(`users/${uid}/position`, {
        timestamp: pos.timestamp,
        lat,
        lng
      });
    }
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}

export function getGeofence(coordinates) {
  const { geofences = {} } = store.getState().venue.venue;
  const basecamp = store.getState().group.totem.coords;

  if (basecamp && inFenceRadius(basecamp, coordinates)) {
    return {
      name: 'Basecamp',
      key: 'basecamp'
    };
  }

  const keys = Object.keys(geofences);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const fence = geofences[key];

    if (inFenceRadius(fence, coordinates)) {
      fence.key = key;
      return { name: fence.name, key };
    }
  }

  return { name: '', key: null };
}

function inFenceRadius(fence, coordinates) {
  const degrees = getDegrees(fence.radius);
  const latDiff = Math.abs(fence.lat - coordinates.lat);
  const longDiff = Math.abs(fence.lng - coordinates.lng);

  return latDiff < degrees && longDiff < degrees;
}

function getDegrees(meters) {
  return meters / 100000;
}
