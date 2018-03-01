const defaults = {
  days: [],
  dayIndex: 0,
  selectedStage: { key: 'all', name: 'All Stages' },
};

export default function scheduleReducer(state = defaults, action) {
  switch(action.type) {
    case 'SET_DAYS': {
      return {
        ...state,
        days: action.payload
      };
    }
    case 'RESET_SCHEDULE': {
      return defaults;
    }
    case 'UPDATE_FILTER_DAY': {
      return {
        ...state,
        dayIndex: action.payload
      };
    }
    case 'UPDATE_FILTER_STAGE': {
      return {
        ...state,
        selectedStage: action.payload
      };
    }
    default:
      return state;
  }
};
