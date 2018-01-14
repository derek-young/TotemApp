import React from 'react';
import { withRouter } from 'react-router-native';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import popoverStyles from './popoverStyles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';

const LeaveGroupPopover = ({ close, history, openGroupPopover, show }) => (
  <Modal
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={popoverStyles.main}>
        <View style={popoverStyles.header}>
          <Text style={popoverStyles.title}>
            Logout
          </Text>
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={popoverStyles['body-text']}>
          Are you sure you want to logout?
        </Text>
        <View style={popoverStyles.footer}>
          <TouchableOpacity
            style={[ popoverStyles.button, popoverStyles.cancel ]}
            onPress={close}
          >
            <Icon name="times" size={20} color="#FF695E" />
            <Text style={popoverStyles['cancel-text']}>
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ popoverStyles.button, popoverStyles.confirm ]}
            onPress={() => {
              // close();
              console.log('logout');
              // history.push('/');
            }}
          >
            <Icon name="check" size={20} color="#2ECC40" />
            <Text style={popoverStyles['confirm-text']}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default withRouter(LeaveGroupPopover);
