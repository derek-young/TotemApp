import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import scheduleStyles from './scheduleStyles';
import { addAgendaItem, removeAgendaItem } from '../../redux/actions';
import { sortByDateAscending } from '../../helpers';

import Header from './ScheduleHeader';
import Row from './ScheduleRow';

const Schedule = ({
  agenda,
  geofences,
  schedule,
  schedule: {
    days,
    dayIndex,
    selectedStage: { key: stageKey }
  },
  scheduleItems,
}) => {
  const displayItems = Object.keys(scheduleItems).filter(key => {
    const { geofenceKey, startTime } = scheduleItems[key];
    const formattedStart = moment(startTime).format('YYYYMMDD');
    const dateFilter = formattedStart === days[dayIndex].format('YYYYMMDD');
    const stageFilter = stageKey === 'all' || stageKey === geofenceKey;

    return stageFilter && dateFilter;
  }).sort((keyA, keyB) => {
    const itemA = scheduleItems[keyA];
    const itemB = scheduleItems[keyB];

    return sortByDateAscending(itemA, itemB);
  });

  return (
    <View style={{ height: '100%' }}>
      <Header
        geofences={geofences}
        {...schedule}
      />
      <ScrollView contentContainerStyle={scheduleStyles['scroll-view']}>
        {displayItems.map(key => (
          <Row
            key={key}
            geofence={geofences[scheduleItems[key].geofenceKey]}
            selected={agenda[key]}
            toggleItem={agenda[key] ? () => removeAgendaItem(key) : () => addAgendaItem(key)}
            {...scheduleItems[key]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default connect(({ user, schedule, venue }) => ({
  agenda: user.agenda,
  geofences: venue.venue.geofences,
  scheduleItems: venue.venue.scheduleItems,
  schedule
}))(Schedule);
