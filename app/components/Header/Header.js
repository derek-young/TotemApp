import React from 'react';
import {
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import headerStyles from './headerStyles';
import { totemBlue } from '../../colors';
import { toggleMenu } from '../../redux/actions';
import logo from '../../img/totemlogo.png';

const Header = ({ isSetupView }) => (
  <View style={headerStyles.main}>
    <View style={headerStyles.icon} />
    <View>
      <Image source={logo} />
    </View>
    {
      !isSetupView ?
      <TouchableHighlight
        onPress={toggleMenu}
        underlayColor={totemBlue}
        style={headerStyles.icon}
      >
        <Icon
          name="bars"
          size={30}
        />
      </TouchableHighlight>
      :
      <View style={headerStyles.icon} />
    }
  </View>
);

export default Header;
