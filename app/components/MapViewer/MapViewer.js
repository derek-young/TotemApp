import React from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import MapView, {
  Callout,
  Marker,
  Overlay,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import moment from 'moment';

import image from '../../img/coachella_map.jpg';
import mapStyles from './mapStyles';

import Totem from './Totem';

const MapViewer = ({ members, totem }) => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LAT = 40.049721; // 33.681653
  const LNG = -105.2816957; // -116.238320
  const NW_OVERLAY_COORD = [LAT + 0.00404, LNG - 0.003877];
  const SE_OVERLAY_COORD = [LAT - 0.00404, LNG + 0.003877];

  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        mapType={'terrain'}
        showsUserLocation
        showsPointsOfInterest={false}
        region={{
          latitude: LAT,
          longitude: LNG,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0122 * ASPECT_RATIO
        }}>
        {
          true && // !!totem.coords &&
          <Totem totem={totem} />
        }
        {Object.keys(members).map(key => {
          const member = members[key];
          const { img, position: { lat, lng } = {} } = member;

          console.log('member', member)

          return (
            <Marker
              key={key}
              coordinate={{
                latitude: 40.049721, // lat
                longitude: -105.2816957 // lng
              }}
            >
              <Image
                source={{ uri: img }}
                style={mapStyles['profile-icon']}
              />
              <Callout>
                <View style={mapStyles['info-window']}>
                  <Text>{member.name}</Text>
                  {
                    !!(member.geofence && member.geofence.name) &&
                    <Text>
                      {member.geofence.name}
                    </Text>
                  }
                  <Text style={mapStyles.subtext}>
                    {moment(member.position.timestamp).fromNow()}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
        <Overlay
          bounds={[ NW_OVERLAY_COORD, SE_OVERLAY_COORD ]}
          image={image}
        />
      </MapView>
    </View>
  );
}

export default connect(({ group }) => ({
  members: group.members,
  totem: group.totem
}))(MapViewer);
