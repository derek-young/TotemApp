import React from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  View,
} from 'react-native';
import MapView, {
  Marker,
  Overlay,
  PROVIDER_GOOGLE
} from 'react-native-maps';

import image from '../../img/coachella_map.jpg';
import mapStyles from './mapStyles';

const MapViewer = ({ members, totem }) => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LAT = 40.049721; // 33.681653
  const LNG = -105.2816957; // -116.238320
  const NW_OVERLAY_COORD = [LAT + 0.00404, LNG - 0.003877];
  const SE_OVERLAY_COORD = [LAT - 0.00404, LNG + 0.003877];

  const basecampIcon = require('../../img/totem-icon.png');

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
          <Marker
            image={basecampIcon}
            // coordinate={totem.coords}
            coordinate={{
              latitude: 40.049,
              longitude: -105.28155
            }}
            // onClick={toggleTotemInfo}
          />
        }
        {Object.keys(members).map(key => {

          const member = members[key];

          // const icon = {
          //   url: member.img,
          //   scaledSize: new google.maps.Size(30, 30),
          //   origin: new google.maps.Point(0,0),
          //   anchor: new google.maps.Point(15, 15),
          //   labelOrigin: new google.maps.Point(15, 35)
          // };

          const { img, position: { lat, lng } = {} } = member;

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
  totem: group.totem,
  showTotemInfo: group.showTotemInfo,
  placeTotem: group.placeTotem
}))(MapViewer);
