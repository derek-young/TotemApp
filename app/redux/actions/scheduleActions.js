import moment from 'moment';

import store from '../../redux/store';

const { dispatch } = store;

export function buildScheduleDays(scheduleItems) {
  const days = {};

  scheduleItems.forEach(({ startTime }) => {
    const momentDate = moment(startTime);

    if (momentDate._isValid) {
      days[momentDate.format('YYYYMMDD')] = momentDate;
    }
  });

  setDays(Object.values(days));
}

export function resetSchedule() {
  return dispatch({
    type: 'RESET_SCHEDULE'
  });
}

function setDays(days) {
  return dispatch({
    type:'SET_DAYS',
    payload: days
  });
}

export function updateFilterDay(day) {
  return dispatch({
    type:'UPDATE_FILTER_DAY',
    payload: moment(day)
  });
}

export function updateFilterStage(stage) {
  return dispatch({
    type: 'UPDATE_FILTER_STAGE',
    payload: stage
  });
}
