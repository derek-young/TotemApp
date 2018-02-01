const defaults = {
  calloutsToShow: {},
  isTotemEnabled: false,
};

export default function mapReducer(state = defaults, action) {
  switch(action.type) {
    case 'CLEAR_CALLOUTS': {
      return {
        ...state,
        calloutsToShow: {}
      };
    }
    case 'PLACE_TOTEM_ON_PRESS': {
      return {
        ...state,
        isTotemEnabled: action.payload
      };
    }
    case 'RESET_MAP': {
      return defaults;
    }
    case 'SHOW_USER_ON_MAP': {
      const { uid, show } = action.payload;

      return {
        ...state,
        calloutsToShow: {
          ...state.calloutsToShow,
          [uid]: show
        }
      };
    }
    default:
      return state;
  }
}
