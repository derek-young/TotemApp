import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { removeAgendaItem } from '../../redux/actions';

import styles from '../../styles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import popoverStyles from './popoverStyles';

const AgendaPopover = ({
  close,
  formattedTime,
  geofence,
  img,
  itemKey,
  members,
  name,
  show,
  startTime,
  uid,
}) => {
  const whoElseIsGoing = [];

  Object.keys(members).map(key => {
    const member = members[key];
    if (member.agenda && member.agenda[itemKey] && key !== uid)  {
      return whoElseIsGoing.push(member.name);
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
                <Text style={styles.subtext}>
                  {moment(startTime).format('dddd, MMM Do')}
                </Text>
                <Text style={styles.subtext}>
                  {formattedTime}
                </Text>
                <Text style={styles.subtext}>
                  {moment(startTime).startOf('hour').fromNow()}
                </Text>
              </View>
            </View>
            <View style={sharedPopoverStyles['body-bottom']}>
              <Text>
                Who else is going?
              </Text>
              {
                whoElseIsGoing.length
                ?
                <Text>
                  {whoElseIsGoing.join(', ')}
                </Text>
                :
                <Text style={styles.subtext}>
                   No one in your group has added this item
                </Text>
              }
            </View>
          </View>
          <TouchableHighlight
            onPress={() => removeAgendaItem(itemKey)}
            style={sharedPopoverStyles.button}
          >
            <Text style={sharedPopoverStyles['button-text']}>
              {'Remove From Agenda'.toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </Modal>
  );
}

export default connect(({ group, user }) => ({
  members: group.members,
  uid: user.uid
}))(AgendaPopover);
