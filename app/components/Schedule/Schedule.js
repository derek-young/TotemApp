import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { addAgendaItem, removeAgendaItem } from '../../redux/actions';

import Header from './Header';
import Row from './Row';

const Schedule = ({ agenda, scheduleItems }) => (
  <View style={{ height: '100%' }}>
    <Header />
    <ScrollView>
      {Object.keys(scheduleItems).map(key => {
        const selected = (agenda && agenda.includes(key));

        return (
          <Row
            key={key}
            selected={selected}
            toggle={selected ?
              () => removeAgendaItem(key) :
              () => addAgendaItem(key)}
            {...scheduleItems[key]}
          />
        );
      })}
    </ScrollView>
  </View>
);

export default connect(({ user, venue }) => ({
  agenda: user.agenda,
  scheduleItems: venue.venue.scheduleItems,
}))(Schedule);
