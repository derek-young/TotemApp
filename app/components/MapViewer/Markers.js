import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
  Marker,
  InfoWindow
} from 'react-native-maps';
import moment from 'moment'

import {
  getGeofence,
  showGroupMemberInfo,
  toggleTotemInfo
} from '../../redux/actions';

const Markers = ({ members, totem, showTotemInfo, placeTotem }) => {
  // const basecamp = {
  //   url: 'img/loading.gif',
  //   scaledSize: new google.maps.Size(50, 96),
  //   origin: new google.maps.Point(0,0),
  //   anchor: new google.maps.Point(25, 96)
  // };

  return (
    <View>
      {
        !!totem.coords &&
        <Marker
          label=''
          // icon={basecamp}
          position={totem.coords}
          onClick={toggleTotemInfo}
        />
      }
      {Object.keys(members).map(uid => {
        const user = members[uid];

        // const icon = {
        //   url: user.img,
        //   scaledSize: new google.maps.Size(30, 30),
        //   origin: new google.maps.Point(0,0),
        //   anchor: new google.maps.Point(15, 15),
        //   labelOrigin: new google.maps.Point(15, 35)
        // };

        console.log('user', user)
        console.log('user coords', user.position)
        const { position: { lat, lng } = {} } = user;

        return (
          <Marker
            key={uid}
            coordinate={{
              latitude: lat,
              longitude: lng
            }}
            // icon={icon}
            onClick={() => showGroupMemberInfo(uid)}
          />
        );
      })}
      <Marker
        coordinate={{
          latitude: 40.049721,
          longitude: -105.2816957
        }}
      />
    </View>
  );
}

export default connect(({ group }) => ({
  members: group.members,
  totem: group.totem,
  showTotemInfo: group.showTotemInfo,
  placeTotem: group.placeTotem
}))(Markers);
