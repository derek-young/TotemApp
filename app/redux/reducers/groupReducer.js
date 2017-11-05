export const defaults = {
  groupName: '',
  memberKeys: {},
  members: {},
  venueId: '',
  totem: {
    coords: {},
    name: 'Basecamp',
    meetupTime: null
  },
  showTotemInfo: false,
  placeTotem: false,
};

export default function groupReducer(state = defaults, action) {
  switch(action.type) {
    case 'UPDATE_GROUP': {
      return { ...state, ...action.payload.group }
    }
    case 'UPDATE_VENUE_ID': {
      return {
        ...state,
        venueId: action.payload.id
      };
    }
    default:
      return state;
  }
};
