import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { toggleMenu } from '../../redux/actions';
import menuStyles from './menuStyles';

const MenuItem = ({ path, text, icon, color, history }) => (
  <TouchableHighlight onPress={() => {
    history.push(path);
    toggleMenu();
  }}>
    <View style={menuStyles.menuItem}>
      <Icon
        style={{ color }}
        name={icon}
        size={25}
      />
      <Text style={[ menuStyles.menuItem__text, { color } ]}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

export default MenuItem;
