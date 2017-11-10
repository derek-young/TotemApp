const defaults = {
  venues: {},
  venue: {
    address: {},
    dates: {},
    emergency: {
      operator: 911
    },
    geofences: {},
    map: {},
    name: {},
    scheduleitems: []
  },
  geofences: {}
};

export default function venueReducer(state = defaults, action) {
  switch(action.type) {
    case 'SET_VENUES': {
      return {
        ...state,
        venues: action.payload || {}
      };
    }
    case 'UPDATE_VENUE_DATA': {
      const newState = { ...state };
      const { venue } = action.payload;
      newState.venue = venue;

      if (venue && venue.geofences) {
        newState.geofences = venue.geofences;
      }

      return newState;
    }
    default:
      return state;
  }
};
