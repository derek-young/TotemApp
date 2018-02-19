const defaults = {
  agenda: {},
  agendas: {},
  uid: null,
  name: null,
  groupKey: null,
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
    case 'RESET_USER': {
      return defaults;
    }
    case 'SET_AGENDA_FOR_VENUE': {
      const { agenda } = action.payload;
      return { ...state, agenda };
    }
    case 'SIGNIN_SUCCESS': {
      const { uid } = action.payload;
      return { ...state, uid };
    }
    case 'USER_DATA_RETRIEVED': {
      return {
        ...state,
        dataRetrieved: true
      };
    }
    case 'UPDATE_USER_GROUP_KEY': {
      return {
        ...state,
        groupKey: action.payload.key
      };
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
