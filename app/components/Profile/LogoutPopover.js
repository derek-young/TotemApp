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

import { signout } from '../../redux/actions';

const LogoutPopover = ({ close, history, show }) => (
  <Modal
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedConfirmStyles.main}>
        <View style={sharedConfirmStyles.header}>
          <Text style={sharedConfirmStyles.title}>
            Logout
          </Text>
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={sharedConfirmStyles['body-text']}>
          Are you sure you want to logout?
        </Text>
        <View style={sharedConfirmStyles.footer}>
          <TouchableOpacity
            style={[ sharedConfirmStyles.button, sharedConfirmStyles.cancel ]}
            onPress={close}
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
              signout().then(() => history.push('/'));
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

export default withRouter(LogoutPopover);