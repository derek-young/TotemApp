import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import headerStyles from './headerStyles';
import { totemBlue, totemPurple, totemOrange } from '../../colors';
import { setUserSort } from '../../redux/actions';

const alphaAZ = {
  label: 'Alphabetically',
  icon: 'sort-alpha-asc',
  method: 'alphaAZ',
  color: totemBlue,
};
const alphaZA = {
  label: 'Alphabetically',
  icon: 'sort-alpha-desc',
  method: 'alphaZA',
  color: totemBlue
};

const icons = [
  alphaAZ,
  { label: 'Stage Name', icon: 'map-signs', method: 'geofence', color: totemPurple },
  { label: 'Proximity', icon: 'street-view', method: 'proximity', color: totemOrange }
];

const GroupHeader = ({ id, memberCount, sortMethod }) => {
  if (sortMethod === 'alphaAZ') icons[0] = alphaZA;
  if (sortMethod === 'alphaZA') icons[0] = alphaAZ;

  if (memberCount < 3) {
    return (
      <View style={headerStyles.main}>
        <View style={headerStyles.top}>
          <Text style={headerStyles['id-text']}>
            Group ID: {id}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={headerStyles.main}>
      <View style={headerStyles.top}>
        <Text style={headerStyles['id-text']}>
          Group ID: {id}
        </Text>
        <Text style={headerStyles['top-text']}>
          Sort Group Members
        </Text>
      </View>
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
