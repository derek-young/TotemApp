import React, { Component } from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import speedDialStyles from './speedDialStyles';

import ambulance from '../../img/ambulance.png';
import friendAlert from '../../img/friend-alert.png';
import totemSquare from '../../img/totemsquare.png';

const actionItems = [
  {
    label: 'Place a Totem',
    imageSource: totemSquare,
    action: () => console.log('hi')
  },
  {
    label: 'Alert Your Friends',
    imageSource: friendAlert,
    action: () => console.log('hi')
  },
  {
    label: 'Contact Emergency Services',
    imageSource: ambulance,
    action: () => console.log('hi')
  }
];

class SpeedDial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;

    if (!open) {
      return this.renderDial();
    }

    return (
      <Animated.View style={speedDialStyles.main}>
        <View>
          {actionItems.map(({ action, label, imageSource }) => (
            <TouchableOpacity
              key={label}
              onPress={action}
              style={speedDialStyles['item-wrapper']}
            >
              <Image
                style={speedDialStyles['item-image']}
                source={imageSource}
              />
              <View style={speedDialStyles['action-item']}>
                <Text style={speedDialStyles['item-text']}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {this.renderDial()}
      </Animated.View>
    );
  }

  renderDial = () => {
    const { open } = this.state;

    return (
      <View style={speedDialStyles.dial}>
        <TouchableOpacity
          style={speedDialStyles.button}
          onPress={() => this.setState({ open: !open })}>
          <Icon name={open ? 'check' : 'plus'} size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SpeedDial;
