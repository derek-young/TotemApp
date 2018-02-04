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
    const {
      map: {
        center,
        bounds: { northwest, southeast } = {},
        img: mapImage
      },
      members,
      totem
    } = this.props;
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;

    let NW_OVERLAY_COORD = null;
    let SE_OVERLAY_COORD = null;

    if (northwest) NW_OVERLAY_COORD = [ northwest.lat, northwest.lng ];
    if (southeast) SE_OVERLAY_COORD = [ southeast.lat, southeast.lng ];

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
            latitude: center.lat,
            longitude: center.lng,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0122 * ASPECT_RATIO
          }}>
          {totem.coords && <Totem totem={totem} />}
          {Object.keys(members).map(key => {
            const imgDefault = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
            const member = members[key];
            const {
              img = imgDefault,
              position: { lat, lng } = {}
            } = member;

            return (
              <Marker
                key={key}
                ref={ref => (this.markers[key] = ref)}
                coordinate={{
                  latitude: lat,
                  longitude: lng
                }}
              >
                <Image
                  source={{ uri: img }}
                  style={mapStyles['profile-icon']}
                />
                <Callout tooltip style={mapStyles['callout-container']}>
                  <View style={mapStyles['callout-window']}>
                    <Text>
                      {member.name}
                    </Text>
                    {
                      !!(member.geofence && member.geofence.name) &&
                      <Text style={mapStyles.subtext}>
                        {member.geofence.name}
                      </Text>
                    }
                    <Text style={mapStyles.subtext}>
                      {moment(member.position.timestamp).fromNow()}
                    </Text>
                  </View>
                  <View style={mapStyles['arrow-container']}>
                    <View style={mapStyles['down-arrow']} />
                  </View>
                </Callout>
              </Marker>
            );
          })}
          {
            (mapImage && NW_OVERLAY_COORD && SE_OVERLAY_COORD) &&
            <Overlay
              bounds={[ NW_OVERLAY_COORD, SE_OVERLAY_COORD ]}
              image={mapImage}
            />
          }
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

export default connect(({ map, group, venue }) => ({
  map: venue.venue.map,
  members: group.members,
  totem: group.totem,
  ...map
}))(MapViewer);
