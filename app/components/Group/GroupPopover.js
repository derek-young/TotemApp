import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import rowStyles from './rowStyles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import popoverStyles from './popoverStyles';

import { showUserOnMap } from '../../redux/actions';

const GroupPopover = ({
  artist,
  close,
  geofence,
  history,
  isUser,
  name,
  openLeaveGroup,
  position = {},
  show,
  uid,
}) => (
  <Modal
    transparent
    visible={show}
  >
    <View style={sharedPopoverStyles.container}>
      <View style={sharedPopoverStyles.main}>
        <View style={sharedPopoverStyles.header}>
          <Text>
            Day Selector Dropdown
          </Text>
          <TouchableOpacity onPress={close}>
            <Icon name="times" size={20} />
          </TouchableOpacity>
        </View>
        <View style={sharedPopoverStyles.body}>
          <View style={sharedPopoverStyles['body-top']}>
            <View style={popoverStyles['body-top-left']}>
              <View>
                <Text style={sharedPopoverStyles['body-text']}>
                  {name}
                </Text>
                {
                  (geofence && !!geofence.name)
                  &&
                  <Text style={sharedPopoverStyles['body-text']}>
                    {geofence.name}
                  </Text>
                }
                {(!!artist) && <Text>{artist}</Text>}
                <Text style={rowStyles.subtext}>
                  Last updated: {moment(position.timestamp).fromNow()}
                </Text>
              </View>
            </View>
            <View style={popoverStyles['action-wrapper']}>
              <TouchableOpacity style={popoverStyles.action}>
                <Icon name="comment-o" size={18} color="#757575" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  history.push('map')
                  showUserOnMap({ uid });
                }}
                style={popoverStyles.action}
              >
                <Icon name="map-marker" size={18} color="#757575" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={sharedPopoverStyles['body-bottom']}>
            {/*  TODO  */}
            <Text>
              Agenda (items in blue you have in common with this user)
            </Text>
          </View>
        </View>
        {
          isUser &&
          <View>
            <TouchableOpacity
              onPress={() => {
                close();
                openLeaveGroup();
              }}
              style={sharedPopoverStyles.button}
            >
              <Text style={sharedPopoverStyles['button-text']}>
                {'Leave Group'.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  </Modal>
);

export default withRouter(GroupPopover);
