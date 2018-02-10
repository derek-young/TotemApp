import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call';

import sharedConfirmStyles from '../../sharedStyles/confirmPopoverStyles';
import sharedPopoverStyles from '../../sharedStyles/popoverStyles';
import totemStyles from '../PlaceTotem/placeTotemStyles';

class ContactES extends Component {
  render() {
    const { close } = this.props;

    return (
      <Modal
        transparent
        visible
      >
        <View style={sharedPopoverStyles.container}>
          <View style={sharedConfirmStyles.main}>
            <View style={totemStyles.header}>
              <View style={{ width: 20 }}/>
              <Text style={[ sharedConfirmStyles.title, { fontSize: 26 } ]}>
                Emergency Services
              </Text>
              <TouchableOpacity style={{ height: '100%' }} onPress={close}>
                <Icon name="times" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <View style={totemStyles['totem-container']}>
                <Icon name="plus-square" size={60} color="#ff8518" />
              </View>
              <Text style={totemStyles['body-text']}>
                Are you sure you want to contact emergency services?
              </Text>
            </View>
            <View style={[ sharedConfirmStyles.footer, { marginBottom: 40 } ]}>
              <TouchableOpacity
                style={[ sharedConfirmStyles.button, sharedConfirmStyles.cancel ]}
                onPress={close}
              >
                <Icon
                  name="times"
                  size={20}
                  color="#FF695E"
                  style={{ marginRight: 10 }}
                />
                <Text style={sharedConfirmStyles['cancel-text']}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ sharedConfirmStyles.button, sharedConfirmStyles.confirm ]}
                onPress={this.handleContactESConfirm}
              >
                <Icon
                  name="check"
                  size={20}
                  color="#2ECC40"
                  style={{ marginRight: 10 }}
                />
                <Text style={sharedConfirmStyles['confirm-text']}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  handleContactESConfirm = () => {
    this.props.close();

    call({
      number: '9703197300',
      prompt: false
    }).catch(console.warn);
  }
}

export default ContactES;
