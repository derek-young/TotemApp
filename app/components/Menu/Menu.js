import React from 'react';
import {
  Text,
  View
} from 'react-native';

import MenuItem from './MenuItem';
import menuStyles from './menuStyles';

const Menu = ({ menuItems }) => (
  <View style={menuStyles.main}>
    <View style={menuStyles.menu}>
      {menuItems.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </View>
  </View>
);

export default Menu;
