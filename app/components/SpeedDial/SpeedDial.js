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

class SpeedDial extends Component {
  constructor(props) {
    super(props);

    const {
      openPlaceTotem,
      openAlertFriends,
      openContactES
    } = this.props;

    this.state = {
      open: false
    };

    this.actionItems = [
      {
        label: 'Place a Totem',
        imageSource: totemSquare,
        action: this.closeSpeedDial(openPlaceTotem)
      },
      // TODO: Create Alert Friends functionality
      // {
      //   label: 'Alert Your Friends',
      //   imageSource: friendAlert,
      //   action: this.closeSpeedDial(openAlertFriends)
      // },
      {
        label: 'Contact Emergency Services',
        imageSource: ambulance,
        action: this.closeSpeedDial(openContactES)
      }
    ];
  }

  render() {
    const { open } = this.state;

    if (!open) {
      return this.renderDial();
    }

    return (
      <Animated.View style={speedDialStyles.main}>
        <View>
          {this.actionItems.map(({ action, label, imageSource }) => (
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

  closeSpeedDial = callback => (
    () => this.setState({ open: false }, callback)
  )
}

export default SpeedDial;
