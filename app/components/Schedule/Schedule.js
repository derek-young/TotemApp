import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { addAgendaItem, removeAgendaItem } from '../../redux/actions';

import Header from './ScheduleHeader';
import Row from './ScheduleRow';

const Schedule = ({
  agenda,
  geofences,
  schedule,
  schedule: {
    selectedDay,
    selectedStage: { key: stageKey }
  },
  scheduleItems,
}) => {
  console.log('selectedDay', selectedDay);

  const displayItems = Object.keys(scheduleItems).filter(key => {
    const { geofenceKey, startTime } = scheduleItems[key];
    const stageFilter = stageKey === 'all' || stageKey === geofenceKey;

    console.log(moment(startTime).format('dddd'))

    return stageFilter;
  });

  const stages = [{ key: 'all', name: 'All Stages' }].concat(
    Object.values(geofences).filter(({ type }) => type === 'venue')
  );

  return (
    <View style={{ height: '100%' }}>
      <Header
        stages={stages}
        {...schedule}
      />
      <ScrollView>
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
}

export default connect(({ user, schedule, venue }) => ({
  agenda: user.agenda,
  geofences: venue.geofences,
  scheduleItems: venue.venue.scheduleItems,
  schedule
}))(Schedule);
