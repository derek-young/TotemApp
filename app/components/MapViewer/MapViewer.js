import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import MapView, {
  Overlay,
  PROVIDER_GOOGLE
} from 'react-native-maps';

import image from '../../img/coachella_map.jpg';
import mapStyles from './mapStyles';

import Markers from './Markers';

const MapViewer = () => {
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
        <Markers />
        <Overlay
          bounds={[ NW_OVERLAY_COORD, SE_OVERLAY_COORD ]}
          image={image}
        />
      </MapView>
    </View>
  );
}



export default MapViewer;
