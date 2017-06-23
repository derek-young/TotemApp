import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { toggleMenu } from '../../redux/actions';
import headerStyles from './headerStyles';
import logo from '../../img/totemlogo.png';

const Header = () => (
  <View style={headerStyles.main}>
    <View></View>
    <View>
      <Image source={logo} />
    </View>
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
  </View>
);

export default Header;
