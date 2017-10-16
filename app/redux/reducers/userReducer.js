const defaults = {
  agenda: [],
  uid: null,
  name: null,
  groupId: null,
  friendList: [],
  dataRetrieved: false,
  facebookUID: null
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'DATA_RETRIEVED_FROM_FIREBASE': {
      return { ...state, dataRetrieved: true };
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
