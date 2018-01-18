import React from 'react';
import { withRouter } from 'react-router-native';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedConfirmStyles from '../sharedStyles/confirmPopoverStyles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';

import { removeUserFromGroup } from '../../redux/actions';

const LeaveGroupPopover = ({ close, history, openGroupPopover, show }) => (
  <Modal
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedConfirmStyles.main}>
        <View style={sharedConfirmStyles.header}>
          <Icon name="hand-peace-o" size={45} color="#FFF" />
          <Text style={sharedConfirmStyles.title}>
            Peace Out
          </Text>
          <TouchableOpacity
            style={{ height: '100%' }}
            onPress={() => {
              close();
              openGroupPopover();
            }}
          >
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={sharedConfirmStyles['body-text']}>
          Are you sure you want to leave this group?
        </Text>
        <Text style={{ color: '#FFF' }}>
          The group will be deleted if you are the only member.
        </Text>
        <View style={sharedConfirmStyles.footer}>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.cancel ]}
            onPress={() => {
              close();
              openGroupPopover();
            }}
          >
            <Icon name="times" size={20} color="#FF695E" />
            <Text style={sharedConfirmStyles['cancel-text']}>
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.confirm ]}
            onPress={() => {
              close();
              removeUserFromGroup();
              history.push('choose-venue');
            }}
          >
            <Icon name="check" size={20} color="#2ECC40" />
            <Text style={sharedConfirmStyles['confirm-text']}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default withRouter(LeaveGroupPopover);
