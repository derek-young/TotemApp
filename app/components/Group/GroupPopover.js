import React from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import styles from '../../styles';
import sharedPopoverStyles from '../sharedStyles/popoverStyles';
import popoverStyles from './popoverStyles';

import { showUserOnMap } from '../../redux/actions';

const GroupPopover = ({
  agenda = {},
  artist,
  close,
  geofence,
  geofences,
  history,
  isUser,
  name,
  openLeaveGroup,
  position = {},
  scheduleItems,
  show,
  uid,
  userAgenda,
}) => {
  /*
    agendaListItems structure:
    {
      Friday: {
        times: [],
        artists: [],
        geofences: []
      },
      Saturday: {
        times: [],
        artists: [],
        geofences: []
      }
    }
  */
  const agendaListItems = {};

  Object.keys(agenda).map(key => {
    const item = scheduleItems[key];
    const { name: itemGeofence = '' } = geofences[item.geofenceKey] || {};
    const day = moment(item.startTime).format('dddd');

    agendaListItems[day] = agendaListItems[day] || new ListItemDay();

    agendaListItems[day].times.push({
      label: moment(item.startTime).format('h:mm a'),
      key
    });
    agendaListItems[day].artists.push({ label: item.name, key });
    agendaListItems[day].geofences.push({ label: itemGeofence, key });
  });

  return (
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
                  <Text style={styles.subtext}>
                    Last updated: {moment(position.timestamp).fromNow()}
                  </Text>
                </View>
              </View>
              <View style={popoverStyles['row-wrapper']}>
                {/* TODO: Implement chat for this application */}
                {/* <TouchableOpacity style={popoverStyles.action}>
                  <Icon name="comment-o" size={18} color="#757575" />
                </TouchableOpacity> */}
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
              <Text>
                Agenda
              </Text>
              {
                Object.keys(agenda).length
                ?
                <View>
                  <Text style={styles.subtext}>
                    items in <Text style={popoverStyles['shared-item']}>blue</Text> you share with this user
                  </Text>
                  <View style={popoverStyles.agenda}>
                    <ScrollView>
                      {Object.keys(agendaListItems).map(day => (
                        <View key={day} style={popoverStyles['agenda-day']}>
                          <Text>{day}</Text>
                          <View style={popoverStyles['row-wrapper']}>
                            {Object.keys(agendaListItems[day]).map(groupKey => (
                              <View key={groupKey} style={popoverStyles.column}>
                                {agendaListItems[day][groupKey].map(({ label, key }) => {
                                  const style = [ popoverStyles['agenda-item'] ];

                                  if (userAgenda[key]) {
                                    style.push(popoverStyles['shared-item']);
                                  }

                                  return (
                                    <Text
                                      key={groupKey.concat(key)}
                                      style={style}
                                    >
                                      {label}
                                    </Text>
                                  );
                                })}
                              </View>
                            ))}
                          </View>
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                </View>
                :
                <Text style={styles.subtext}>
                  no agenda items to display
                </Text>
              }
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
}

function ListItemDay() {
  this.times = [];
  this.artists = [];
  this.geofences = [];
}

export default withRouter(connect(({ schedule, venue }) => ({
  geofences: venue.geofences,
  scheduleItems: venue.venue.scheduleItems,
  selectedDay: schedule.selectedDay
}))(GroupPopover));
