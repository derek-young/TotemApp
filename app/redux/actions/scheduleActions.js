import store from '../../redux/store';

const { dispatch } = store;

export function updateDay(day) {
  return dispatch({
    type:'UPDATE_DAY',
    payload: day
  });
}

export function updateStage(stage) {
  return dispatch({
    type: 'UPDATE_STAGE',
    payload: stage
  });
}
