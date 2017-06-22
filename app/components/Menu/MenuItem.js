import React from 'react';
import {
  Text,
  View
} from 'react-native';

import menuStyles from './menuStyles';

const MenuItem = ({ path, text, icon }) => (
  <View style={menuStyles.menuItem}>
    <Text style={menuStyles['menuItem__text']}>Text</Text>
  </View>
);

export default MenuItem;
