import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedRowStyles from '../sharedStyles/scheduleRowStyles';

const ScheduleRow = ({ name, geofence, startTime, endTime }) => (
  <View style={sharedRowStyles.main}>
    <View>
      <Text style={sharedRowStyles.label}>
        {name.toUpperCase()}
      </Text>
      <Text style={sharedRowStyles.subtext}>
        {geofence}
      </Text>
      <Text style={sharedRowStyles.subtext}>
        {`${moment(startTime).format('h:mm a')} - ${moment(endTime).format('h:mm a')}`}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => console.log('open additional options popup')}
      style={sharedRowStyles.icon}
    >
      <Icon
        name="ellipsis-v"
        size={20}
      />
    </TouchableOpacity>
  </View>
);

export default ScheduleRow;
