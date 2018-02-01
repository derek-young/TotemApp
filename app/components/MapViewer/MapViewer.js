import React, { Component } from 'react';
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
import {
  clearCallouts,
  placeTotemOnPress,
  updateTotemCoords
} from '../../redux/actions';

import Totem from './Totem';

class MapViewer extends Component {
  constructor(props) {
    super(props);

    this.markers = {};
  }

  componentDidMount() {
    setTimeout(this.displayCallouts, 500);
  }

  componentWillUnmount() {
    clearCallouts();
  }

  render() {
    const { members, totem } = this.props;
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LAT = 40.049721; // 33.681653
    const LNG = -105.2816957; // -116.238320
    const NW_OVERLAY_COORD = [LAT + 0.00404, LNG - 0.003877];
    const SE_OVERLAY_COORD = [LAT - 0.00404, LNG + 0.003877];

    return (
      <View style={mapStyles.container}>
        <MapView
          mapType={'terrain'}
          onPress={this.handleMapPress}
          provider={PROVIDER_GOOGLE}
          style={mapStyles.map}
          showsUserLocation
          showsPointsOfInterest={false}
          region={{
            latitude: LAT,
            longitude: LNG,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0122 * ASPECT_RATIO
          }}>
          {totem.coords && <Totem totem={totem} />}
          {Object.keys(members).map(key => {
            const member = members[key];
            const { img, position: { lat, lng } = {} } = member;

            return (
              <Marker
                key={key}
                ref={ref => (this.markers[key] = ref)}
                coordinate={{
                  latitude: 40.049721, // lat
                  longitude: -105.2816957 // lng
                }}
              >
                <Image
                  source={{ uri: img }}
                  style={mapStyles['profile-icon']}
                />
                <Callout style={mapStyles['callout-window']}>
                  <View>
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

  displayCallouts = () => {
    const { calloutsToShow, members } = this.props;

    Object.keys(members).forEach(key => {
      if (calloutsToShow[key]) {
        this.markers[key].showCallout();
      }
    });
  }

  handleMapPress = e => {
    const { isTotemEnabled } = this.props;

    if (isTotemEnabled) {
      const { coordinate: { longitude, latitude }} = e.nativeEvent;
      const coords = { latitude, longitude, radius: 20 };

      updateTotemCoords(coords);
      placeTotemOnPress(false);
    }
  }
}


export default connect(({ map, group }) => ({
  members: group.members,
  totem: group.totem,
  ...map
}))(MapViewer);
