import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import MapView, { Marker, Overlay, PROVIDER_GOOGLE } from 'react-native-maps';
// import { NativeRouter, Route } from 'react-router-native'

import image from './img/coachella_map.jpg';
import semiTransparentImage from './img/coachella_map.png';
import styles from './styles';

/* Components */
// import Header from './components/Header/Header';
// import Group from './components/Group/Group';
// import MapViewer from './components/MapViewer/MapViewer';
// import Agenda from './components/Agenda/Agenda';
// import Schedule from './components/Schedule/Schedule';

export default class App extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const NW_OVERLAY_COORD = [33.685693, -116.242197];
    const SE_OVERLAY_COORD = [33.677613, -116.234443];

    return (
      <View style={styles.container}>
        <Text>
          Hello
        </Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          mapType={'terrain'}
          showsUserLocation={true}
          showsMyLocationButton={true}
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
}
