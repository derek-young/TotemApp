import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setUserSort } from '../../redux/actions';
import headerStyles from './headerStyles';

const alphaAZ = {
  label: 'Alphabetically',
  icon: 'sort-alpha-asc',
  method: 'alphaAZ',
  color: '#bffffd',
};
const alphaZA = {
  label: 'Alphabetically',
  icon: 'sort-alpha-desc',
  method: 'alphaZA',
  color: '#bffffd'
};

const icons = [
  alphaAZ,
  { label: 'Stage Name', icon: 'map-signs', method: 'geofence', color: '#e7bfff' },
  { label: 'Proximity', icon: 'street-view', method: 'proximity', color: '#ffbfbf' }
];

const GroupHeader = ({ id, sortMethod }) => {
  if (sortMethod === 'alphaAZ') icons[0] = alphaZA;
  if (sortMethod === 'alphaZA') icons[0] = alphaAZ;

  return (
    <View style={headerStyles.main}>
      <View style={headerStyles.id}>
        <Text style={headerStyles['id-text']}>
          Group ID: {id}
        </Text>
      </View>
      <Text style={headerStyles['top-text']}>
        Sort Group Members
      </Text>
      <View style={headerStyles['sort-options']}>
        {icons.map(({ label, icon, method, color }) => (
          <TouchableHighlight
            key={method}
            onPress={() => setUserSort(method)}
            style={headerStyles['button-wrapper']}
          >
            <View style={headerStyles.button}>
              <Icon name={icon} size={30} color={color} />
              <Text style={{ color, marginTop: 3 }}>
                {label}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export default GroupHeader;
