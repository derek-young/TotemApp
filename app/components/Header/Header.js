import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Link } from 'react-router-native';
// import NavButton from './NavButton';
import headerStyles from './headerStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => (
  <View style={headerStyles.main}>
    <Link to="group">
      <Text>
        Group
      </Text>
    </Link>
    <Link to="map">
      <Text>
        Map
      </Text>
    </Link>
    <Link to="agenda">
      <Text>
        Agenda
      </Text>
    </Link>
    <Link to="schedule">
      <Text>
        Schedule
      </Text>
    </Link>
    <TouchableHighlight
      onPress={() => console.log("clicked")}
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
