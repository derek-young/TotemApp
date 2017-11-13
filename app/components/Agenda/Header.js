import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import headerStyles from './headerStyles';

const AgendaHeader = () => (
  <View style={headerStyles.main}>
    <TouchableHighlight>
      <Text>Friday</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text>All Stages</Text>
    </TouchableHighlight>
  </View>
);

export default AgendaHeader;
