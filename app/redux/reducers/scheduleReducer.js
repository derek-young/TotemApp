const defaults = {
  days: [ 'Friday', 'Saturday', 'Sunday' ],  // Update to moment object
  stages: [ 'All Stages', 'Sahara', 'Yuma', 'Mojave', 'Goji' ],
  selectedDay: 'Friday',
  selectedStage: 'All Stages',
};

export default function userReducer(state = defaults, action) {
  switch(action.type) {
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
