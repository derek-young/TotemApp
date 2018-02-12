const defaults = {
  groupName: '',
  memberKeys: {},
  members: {},
  placeTotem: false,
  sortMethod: 'proximity',
  totem: {
    coords: {},
    name: 'Basecamp',
    meetupTime: null
  },
  venueId: '',
};

export default function groupReducer(state = defaults, action) {
  switch(action.type) {
    case 'RESET_GROUP': {
      return defaults;
    }
    case 'SET_MEETUP_TIME': {
      return {
        ...state,
        totem: {
          ...state.totem,
          meetupTime: action.payload
        }
      };
    }
    case 'SET_USER_SORT': {
      const { method } = action.payload;

      return { ...state, sortMethod: method };
    }
    case 'UPDATE_GROUP_MEMBER': {
      const { user, uid } = action.payload;

      return {
        ...state,
        members: {
          ...state.members,
          [uid]: user
        }
      };
    }
    case 'UPDATE_TOTEM_COORDS': {
      return {
        ...state,
        totem: {
          ...state.totem,
          coords: action.payload
        }
      };
    }
    case 'UPDATE_GROUP': {
      return {
        ...state,
        ...action.payload.group
      };
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
