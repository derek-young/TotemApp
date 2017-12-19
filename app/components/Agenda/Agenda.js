import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Header from './AgendaHeader';
import Row from './AgendaRow';

const Agenda = ({ agenda, days, geofences, scheduleItems, selectedDay }) => (
  <View style={{ height: '100%' }}>
    <Header
      days={days}
      selectedDay={selectedDay}
    />
    <ScrollView>
      {Object.keys(agenda).map(key => (
        <Row
          key={key}
          geofence={geofences[scheduleItems[key].geofenceKey]}
          itemKey={key}
          {...scheduleItems[key]}
        />
      ))}
    </ScrollView>
  </View>
)

export default connect(({ user, schedule, venue }) => ({
  agenda: user.agenda,
  days: schedule.days,
  geofences: venue.geofences,
  scheduleItems: venue.venue.scheduleItems,
  selectedDay: schedule.selectedDay
}))(Agenda);
