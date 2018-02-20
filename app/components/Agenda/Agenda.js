import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from '../../sharedStyles/styles';
import agendaStyles from './agendaStyles';

import { sortByDateAscending } from '../../helpers';

import Header from './AgendaHeader';
import Row from './AgendaRow';

const Agenda = ({ agenda, days, geofences, scheduleItems, selectedDay }) => {
  const displayItems = Object.keys(agenda).filter(key => {
    const { startTime } = scheduleItems[key];
    const formattedStart = moment(startTime).format('YYYYMMDD');

    return formattedStart === selectedDay.format('YYYYMMDD');
  }).sort((keyA, keyB) => {
    const itemA = scheduleItems[keyA];
    const itemB = scheduleItems[keyB];

    return sortByDateAscending(itemA, itemB);
  });

  return (
    <View style={{ height: '100%' }}>
      <Header
        days={days}
        selectedDay={selectedDay}
      />
      <ScrollView contentContainerStyle={agendaStyles['scroll-view']}>
        {
          displayItems.length
          ?
          displayItems.map(key => (
            <Row
              key={key}
              geofence={geofences[scheduleItems[key].geofenceKey]}
              itemKey={key}
              {...scheduleItems[key]}
            />
          ))
          :
          <View style={agendaStyles.empty}>
            <Text style={styles['info-text']}>
              Create your personal agenda in the Schedule view.
            </Text>
            <Text style={styles['info-text']}>
              Add shows you&#8217;re interested in and you will be
              notified when the show is about to start.
            </Text>
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default connect(({ user, schedule, venue }) => ({
  agenda: user.agenda,
  days: schedule.days,
  geofences: venue.venue.geofences,
  scheduleItems: venue.venue.scheduleItems,
  selectedDay: schedule.selectedDay
}))(Agenda);
