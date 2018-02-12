import React from 'react';
import {
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setUserSort } from '../../redux/actions';
import headerStyles from './headerStyles';

const alphaAZ = { icon: 'sort-alpha-asc', method: 'alphaAZ', color: '#bffffd' };
const alphaZA = { icon: 'sort-alpha-desc', method: 'alphaZA', color: '#bffffd' };

const icons = [
  alphaAZ,
  { icon: 'map-signs', method: 'geofence', color: '#e7bfff' },
  { icon: 'street-view', method: 'proximity', color: '#ffbfbf' }
];

const GroupHeader = ({ sortMethod }) => {
  if (sortMethod === 'alphaAZ') icons[0] = alphaZA;
  if (sortMethod === 'alphaZA') icons[0] = alphaAZ;

  return (
    <View style={headerStyles.main}>
      {icons.map(({ icon, method, color }) => (
        <TouchableHighlight
          key={method}
          onPress={() => setUserSort(method)}
          style={headerStyles.button}
        >
          <Icon name={icon} size={30} color={color} />
        </TouchableHighlight>
      ))}
    </View>
  );
};

export default GroupHeader;
