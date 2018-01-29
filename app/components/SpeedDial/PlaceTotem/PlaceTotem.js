import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedConfirmStyles from '../../sharedStyles/confirmPopoverStyles';
import sharedPopoverStyles from '../../sharedStyles/popoverStyles';
import totemStyles from './placeTotemStyles';

import totemGif from '../../../img/loading.gif';

const hourOptions = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const minuteOptions = ['', '00', '05'];
for (let i = 10; i < 60; i += 5) {
  minuteOptions.push(i);
}

const PlaceTotem = ({ close }) => (
  <Modal
    transparent
    visible
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedConfirmStyles.main}>
        <View style={totemStyles.header}>
          <View style={totemStyles['title-container']}>
            <Text style={sharedConfirmStyles.title}>
              Place a Totem
            </Text>
          </View>
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={totemStyles['totem-container']}>
          <Image source={totemGif} style={{ height: 125, width: 65 }} />
        </View>
        <Text style={totemStyles['body-text']}>
          To set a meeting place for your group, touch OK and then anywhere on the map to drop a totem.
        </Text>
        <Text style={totemStyles['option-text']}>
          <Text style={{ fontStyle: 'italic' }}>(Optional)</Text> Set a meetup time. The totem will expire 30 minutes after the set time.
        </Text>
        <View style={sharedConfirmStyles.footer}>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.cancel ]}
            onPress={close}
          >
            <Text style={sharedConfirmStyles['cancel-text']}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.ok ]}
            onPress={() => console.log('place totem')}
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

export default PlaceTotem;
