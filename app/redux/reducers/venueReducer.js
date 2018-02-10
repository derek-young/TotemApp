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
    scheduleItems: {}
  },
};

export default function venueReducer(state = defaults, action) {
  switch(action.type) {
    case 'RESET_VENUE': {
      return defaults;
    }
    case 'SET_VENUES': {
      return {
        ...state,
        venues: action.payload || {}
      };
    }
    case 'UPDATE_VENUE_DATA': {
      const { venue } = action.payload;

      return { ...state, venue };
    }
    default:
      return state;
  }
};
