import React from 'react';
import {
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { sortUsers } from '../../redux/actions';
import headerStyles from './headerStyles';

const icons = [
  { icon: 'sort-alpha-asc', method: 'sortAZ', color: '#bffffd' },
  { icon: 'map-signs', method: 'geofence', color: '#e7bfff' },
  { icon: 'street-view', method: 'proximity', color: '#ffbfbf' }
];

const Header = () => (
  <View style={headerStyles.main}>
    {icons.map(({ icon, method, color }) => (
      <TouchableHighlight
        key={method}
        onPress={() => sortUsers(method)}
        style={headerStyles.button}
      >
        <Icon name={icon} size={30} color={color} />
      </TouchableHighlight>
    ))}
  </View>
);

export default Header;
