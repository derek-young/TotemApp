import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { addAgendaItem, removeAgendaItem } from '../../redux/actions';

import Header from './ScheduleHeader';
import Row from './ScheduleRow';

const Schedule = ({
  agenda,
  schedule,
  scheduleItems,
}) => (
  <View style={{ height: '100%' }}>
    <Header {...schedule} />
    <ScrollView>
      {Object.keys(scheduleItems).map(key => (
        <Row
          key={key}
          selected={agenda[key]}
          toggleItem={agenda[key] ? () => removeAgendaItem(key) : () => addAgendaItem(key)}
          {...scheduleItems[key]}
        />
      ))}
    </ScrollView>
  </View>
);

export default connect(({ user, schedule, venue }) => ({
  agenda: user.agenda,
  scheduleItems: venue.venue.scheduleItems,
  schedule
}))(Schedule);
