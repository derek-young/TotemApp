import React, { Component } from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import store from '../../redux/store';
import speedDialStyles from './speedDialStyles';

import ambulance from '../../img/ambulance.png';
import friendAlert from '../../img/friend-alert.png';
import totemRemove from '../../img/totem-remove.png';
import totemSquare from '../../img/totemsquare.png';

class SpeedDial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.actionItems = [];
    this.close = () => this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    if (!open) {
      return this.renderDial();
    }

    this.actionItems = this.buildActionItems();

    return (
      <Animated.View style={speedDialStyles.main}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this.close} />
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

  buildActionItems = () => {
    const {
      openPlaceTotem,
      openRemoveTotem,
      openAlertFriends,
      openContactES
    } = this.props;
    const { coords } = store.getState().group.totem;
    const groupHasTotem = coords && Object.keys(coords).length > 0;
    const actionItems = [];

    if (!groupHasTotem) {
      actionItems.push({
        label: 'Place a Totem',
        imageSource: totemSquare,
        action: this.closeSpeedDial(openPlaceTotem)
      });
    } else {
      actionItems.push({
        label: 'Remove Totem',
        imageSource: totemRemove,
        action: this.closeSpeedDial(openRemoveTotem)
      });
    }

    // TODO: Create Alert Friends functionality
    // actionItems.push({
    //   label: 'Alert Your Friends',
    //   imageSource: friendAlert,
    //   action: this.closeSpeedDial(openAlertFriends)
    // });

    actionItems.push({
      label: 'Contact Emergency Services',
      imageSource: ambulance,
      action: this.closeSpeedDial(openContactES)
    });

    return actionItems;
  }
}

export default SpeedDial;
