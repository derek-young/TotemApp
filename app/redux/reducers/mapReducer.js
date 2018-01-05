const defaults = {
  calloutsToShow: {},
};

export default function mapReducer(state = defaults, action) {
  switch(action.type) {
    case 'CLEAR_CALLOUTS': {
      return {
        ...state,
        calloutsToShow: {}
      };
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
