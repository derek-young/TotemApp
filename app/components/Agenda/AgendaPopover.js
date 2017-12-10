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
  imgurl,
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
        <View style={popoverStyles.main}>
          <View style={popoverStyles.header}>
            <Text style={popoverStyles.title}>
              {name}
            </Text>
            <TouchableOpacity onPress={close}>
              <Icon name="times" size={20} />
            </TouchableOpacity>
          </View>
          <View style={popoverStyles.body}>
            <View style={popoverStyles['body-top']}>
              {imgurl && <Image source={imgurl} />}
              <View>
                <Text style={popoverStyles['body-text']}>
                  {geofence}
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
            <View style={popoverStyles['body-bottom']}>
              <Text style={popoverStyles['body-text']}>
                Who else is going?
              </Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={() => removeAgendaItem(itemKey)}
            style={popoverStyles.button}
          >
            <Text style={popoverStyles['button-text']}>
              {'Remove From Adgenda'.toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </Modal>
  );
}

export default AgendaPopover;
