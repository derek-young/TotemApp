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

import MeetupPicker from './MeetupPicker';

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
        <View>
          <View style={totemStyles['totem-container']}>
            <Image source={totemGif} style={{ height: 125, width: 65 }} />
          </View>
          <Text style={totemStyles['body-text']}>
            To set a meeting place for your group, touch OK and then anywhere on the map to drop a totem.
          </Text>
          <Text style={totemStyles['option-text']}>
            <Text style={totemStyles.emphasis}>(Optional)</Text> Set a meetup time. The totem will expire 30 minutes after the set time.
          </Text>
          <MeetupPicker />
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
