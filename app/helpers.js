import moment from 'moment';

export function sortByDateAscending(itemA, itemB) {
  const aStart = moment(itemA.startTime).valueOf();
  const bStart = moment(itemB.startTime).valueOf();

  if (aStart > bStart) {
    return 1;
  } else if (aStart < bStart) {
    return -1;
  }

  return 0;
}
