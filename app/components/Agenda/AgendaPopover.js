import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { removeAgendaItem } from '../../redux/actions';

import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import popoverStyles from './popoverStyles';

const AgendaPopover = ({
  close,
  name,
  formattedTime,
  geofence,
  img,
  itemKey,
  show,
  startTime,
  users = {},
  user
}) => {
  Object.keys(users).map(userKey => {
    const friend = users[userKey];
    if (friend.agenda && friend.agenda[itemKey] && userKey !== user.uid)  {
      return friend.label + ', ';
    }
  });

  return (
    <Modal
      transparent
      visible={show}
    >
      <TouchableHighlight style={sharedPopoverStyles.container}>
        <View style={sharedPopoverStyles.main}>
          <View style={sharedPopoverStyles.header}>
            <Text style={popoverStyles.title}>
              {name}
            </Text>
            <TouchableOpacity onPress={close}>
              <Icon name="times" size={20} />
            </TouchableOpacity>
          </View>
          <View style={sharedPopoverStyles.body}>
            <View style={sharedPopoverStyles['body-top']}>
              {img && <Image source={img} />}
              <View>
                <Text style={sharedPopoverStyles['body-text']}>
                  {geofence.name}
                </Text>
                <Text>
                  {moment(startTime).format('dddd, MMM Do')}
                </Text>
                <Text>
                  {formattedTime}
                </Text>
                <Text>
                  {moment(startTime).startOf('hour').fromNow()}
                </Text>
              </View>
            </View>
            <View style={sharedPopoverStyles['body-bottom']}>
              <Text style={sharedPopoverStyles['body-text']}>
                Who else is going?
              </Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={() => removeAgendaItem(itemKey)}
            style={sharedPopoverStyles.button}
          >
            <Text style={sharedPopoverStyles['button-text']}>
              {'Remove From Adgenda'.toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </Modal>
  );
}

export default AgendaPopover;
