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
    animationType="fade"
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedConfirmStyles.main}>
        <View style={sharedConfirmStyles.header}>
          <View style={{ width: 20 }} />
          <Text style={sharedConfirmStyles.title}>
            Logout
          </Text>
          <TouchableOpacity style={{ height: '100%' }} onPress={close}>
            <Icon name="times" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={sharedConfirmStyles['body-text']}>
            Are you sure you want to logout?
          </Text>
        </View>
        <View style={sharedConfirmStyles.footer}>
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
            onPress={() => {
              close();
              signout().then(() => history.push('/'));
            }}
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

export default withRouter(LogoutPopover);
