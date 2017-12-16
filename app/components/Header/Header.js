import React from 'react';
import {
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { toggleMenu } from '../../redux/actions';
import headerStyles from './headerStyles';
import logo from '../../img/totemlogo.png';

const Header = ({ path }) => (
  <View style={headerStyles.main}>
    <View />
    <View>
      <Image source={logo} />
    </View>
    {
      (path !== '/choose-venue' && path !== '/create-group') ?
      <TouchableHighlight
        onPress={toggleMenu}
        underlayColor="#bffffd"
        style={headerStyles.icon}
      >
        <Icon
          name="bars"
          size={30}
        />
      </TouchableHighlight>
      :
      <View />
    }
  </View>
);

export default Header;
