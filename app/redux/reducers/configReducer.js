const defaults = {
  sortByOption: 'upcoming'
};

export default function configReducer(state = defaults, action) {
  switch(action.type) {
    case 'SET_VENUE_SORT_OPTION': {
      return {
        ...state,
        sortByOption: action.payload
      };
    }
    default:
      return state;
  }
};
