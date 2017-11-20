const defaults = {
  agenda: {},
  uid: null,
  name: null,
  groupId: null,
  friendList: [],
  dataRetrieved: false,
  facebookUID: null
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
    case 'ADD_AGENDA_ITEM': {
      return {
        ...state,
        agenda: {
          ...state.agenda,
          [action.payload.key]: true
        }
      };
    }
    case 'REMOVE_AGENDA_ITEM': {
      const newAgenda = { ...state.agenda };

      delete newAgenda[action.payload.key];

      return {
        ...state,
        agenda: newAgenda
      };
    }
    case 'USER_DATA_RETRIEVED': {
      return {
        ...state,
        dataRetrieved: true
      };
    }
    case 'SIGNIN_SUCCESS': {
      const { uid } = action.payload;
      return { ...state, uid };
    }
    case 'UPDATE_USER_DATA': {
      return {
        ...state,
        ...action.payload.user
      };
    }
    default:
      return state;
  }
};
