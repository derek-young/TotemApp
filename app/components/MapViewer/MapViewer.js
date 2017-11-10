import React from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView, {
  Marker,
  Overlay,
  PROVIDER_GOOGLE
} from 'react-native-maps';

import image from '../../img/coachella_map.jpg';
import mapStyles from './mapStyles';

const MapViewer = () => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const NW_OVERLAY_COORD = [33.685693, -116.242197];
  const SE_OVERLAY_COORD = [33.677613, -116.234443];

  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        mapType={'terrain'}
        showsUserLocation
        showsMyLocationButton
        showsPointsOfInterest={false}
        region={{
          latitude: 33.681653,
          longitude: -116.238320,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0122 * ASPECT_RATIO
        }}>
        <Overlay
          bounds={[ NW_OVERLAY_COORD, SE_OVERLAY_COORD ]}
          image={image}
        />
        <Marker
          coordinate={{
            latitude: 33.681653,
            longitude: -116.238320
          }}
        />
      </MapView>
    </View>
  );
}



export default MapViewer;
