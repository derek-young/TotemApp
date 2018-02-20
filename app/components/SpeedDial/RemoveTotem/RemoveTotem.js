import React, { Component } from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedConfirmStyles from '../../../sharedStyles/confirmPopoverStyles';
import sharedPopoverStyles from '../../../sharedStyles/popoverStyles';
import totemStyles from '../PlaceTotem/placeTotemStyles';

import { updateTotemCoords } from '../../../redux/actions';
import totemGif from '../../../img/loading.gif';

class RemoveTotem extends Component {
  render() {
    const { close } = this.props;

    return (
      <Modal transparent>
        <View style={sharedPopoverStyles.container}>
          <View style={sharedConfirmStyles.main}>
            <View style={totemStyles.header}>
              <View style={totemStyles['title-container']}>
                <Text style={sharedConfirmStyles.title}>
                  Remove Totem
                </Text>
              </View>
              <TouchableOpacity style={{ height: '100%' }} onPress={close}>
                <Icon name="times" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={[ totemStyles.section, { flex: 1 } ]}>
              <View style={totemStyles['totem-container']}>
                <Image source={totemGif} style={{ height: 125, width: 65 }} />
              </View>
              <Text style={[ totemStyles.section, totemStyles['body-text'] ]}>
                Are you sure you want to remove the totem?
              </Text>
              <Text style={totemStyles['option-text']}>
                This action will cause the marker to disappear for all users in your group.
              </Text>
            </View>
            <View style={sharedConfirmStyles.footer}>
              <TouchableOpacity
                style={[ sharedConfirmStyles.button, sharedConfirmStyles.cancel ]}
                onPress={close}
              >
                <Text style={sharedConfirmStyles['cancel-text']}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ sharedConfirmStyles.button, sharedConfirmStyles.ok ]}
                onPress={this.handleConfirmPress}
              >
                <Text style={sharedConfirmStyles['ok-text']}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  handleConfirmPress = () => {
    updateTotemCoords({});
    this.props.close();
  }
}

export default RemoveTotem;
