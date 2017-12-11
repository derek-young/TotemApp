import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import leaveGroupStyles from './leaveGroupStyles';

const LeaveGroupPopover = ({ close, show }) => (
  <Modal
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={leaveGroupStyles.main}>
        <View style={leaveGroupStyles.header}>
          <Icon name="hand-peace-o" size={45} color="#FFF" />
          <Text style={leaveGroupStyles.title}>
            Peace Out
          </Text>
          <TouchableOpacity onPress={close}>
            <Icon name="times" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default LeaveGroupPopover;
