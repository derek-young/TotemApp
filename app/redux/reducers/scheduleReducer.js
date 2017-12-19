const defaults = {
  days: [],
  selectedDay: 'Friday',
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
    case 'UPDATE_DAY': {
      return {
        ...state,
        selectedDay: action.payload
      };
    }
    case 'UPDATE_STAGE': {
      return {
        ...state,
        selectedStage: action.payload
      };
    }
    default:
      return state;
  }
};
