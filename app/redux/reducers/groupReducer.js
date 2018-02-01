const defaults = {
  groupName: '',
  memberKeys: {},
  members: {},
  venueId: '',
  totem: {
    coords: {},
    name: 'Basecamp',
    meetupTime: null
  },
  placeTotem: false,
};

export default function groupReducer(state = defaults, action) {
  switch(action.type) {
    case 'RESET_GROUP': {
      return defaults;
    }
    case 'USERS_SORT': {
      const members = objToArray(state.members);
      const sortedUsers = members.sort(action.payload.method);

      return {
        ...state,
        members: arrToObj(sortedUsers)
      };
    }
    case 'UPDATE_GROUP_MEMBER': {
      const { user, uid } = action.payload;

      return {
        ...state,
        members: {
          ...state.members,
          [uid]: {
            ...user
          }
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

function objToArray(obj) {
  const result = [];
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    result.push({ ...obj[key], key });
  }

  return result;
}

function arrToObj(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.key] = curr;
    return acc;
  }, {});
}
