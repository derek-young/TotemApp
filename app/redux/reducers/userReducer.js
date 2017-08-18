const defaults = {
  agenda: [],
  uid: null,
  name: null,
  groupId: null,
  friendList: [],
  dataRetrieved: false,
  facebookUsername: null,
  facebookUID: null
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'SET_FB_USERNAME': {
      return { ...state, facebookUsername: action.payload.name };
    }
    case 'SIGNIN_SUCCESS': {
      const { uid, name } = action.payload;
      return { ...state, uid, name };
    }
    case 'UPDATE_USER_GROUP_ID': {
      return { ...state, groupId: action.payload.id };
    }
    default:
      return state;
  }
};
