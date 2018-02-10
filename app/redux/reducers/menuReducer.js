const defaults = {
  menuVisible: false
};

export default function menuReducer(state = defaults, action) {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        menuVisible: !state.menuVisible
      };
    }
    default:
      return state;
  }
};
