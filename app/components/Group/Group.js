import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sortUsers } from '../../redux/actions';

import groupStyles from './groupStyles';

const icons = [
  { icon: 'sort-alpha-asc', method: 'sortAZ', color: groupStyles.button.alpha },
  { icon: 'map-signs', method: 'geofence', color: groupStyles.button.geofence },
  { icon: 'street-view', method: 'proximity', color: groupStyles.button.proximity }
];

const Group = () => (
  <View>
    <View style={groupStyles.header}>
      {icons.map(({ icon, method, color }) => (
        <TouchableHighlight onPress={() => sortUsers(method)}>
          <Icon name={icon} size={30} color="#900" />
        </TouchableHighlight>
      ))}
      <Icon name="sort-alpha-asc" size={30} color="#900" />
    </View>
    <ScrollView>
      <Text>
        Group View
      </Text>
    </ScrollView>
  </View>
);

export default Group;
