import React from 'react';
import { withRouter } from 'react-router-native';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import leaveGroupStyles from './leaveGroupStyles';

import { removeUserFromGroup } from '../../redux/actions';

const LeaveGroupPopover = ({ close, history, openGroupPopover, show }) => (
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
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={leaveGroupStyles['body-text']}>
          Are you sure you want to leave this group?
        </Text>
        <Text style={{ color: '#FFF' }}>
          The group will be deleted if you are the only member.
        </Text>
        <View style={leaveGroupStyles.footer}>
          <TouchableOpacity
            style={[ leaveGroupStyles.button, leaveGroupStyles.cancel ]}
            onPress={() => {
              close();
              openGroupPopover();
            }}
          >
            <Icon name="times" size={20} color="#FF695E" />
            <Text style={leaveGroupStyles['cancel-text']}>
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ leaveGroupStyles.button, leaveGroupStyles.confirm ]}
            onPress={() => {
              close();
              removeUserFromGroup();
              history.push('choose-venue');
            }}
          >
            <Icon name="check" size={20} color="#2ECC40" />
            <Text style={leaveGroupStyles['confirm-text']}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default withRouter(LeaveGroupPopover);
