import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import rowStyles from './rowStyles';

const Row = ({ name, geofence, startTime, endTime, selected, toggle }) => (
  <View style={rowStyles.main}>
    <View>
      <Text style={rowStyles.label}>
        {name.toUpperCase()}
      </Text>
      <Text style={rowStyles.subtext}>
        {geofence}
      </Text>
      <Text style={rowStyles.subtext}>
        {`${moment(startTime).format('h:mm a')} - ${moment(endTime).format('h:mm a')}`}
      </Text>
    </View>
    <TouchableOpacity onPress={toggle} style={rowStyles.icon}>
      <Icon
        style={selected ? rowStyles.removeButton : rowStyles.addButton}
        name={selected ? 'times-circle' : 'plus-circle'}
        size={24}
      />
    </TouchableOpacity>
  </View>
);

export default Row;
