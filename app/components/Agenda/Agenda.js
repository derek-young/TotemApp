import React from 'react';
import {
  Text,
  View
} from 'react-native';

import Header from './AgendaHeader';

const Agenda = () => (
  <View style={{ height: '100%' }}>
    <Header />
    <Text>
      Agenda View
    </Text>
  </View>
);

export default Agenda;
