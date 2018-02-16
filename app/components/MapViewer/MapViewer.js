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
    const { width, height } = Dimensions.get('window');

    this.map = null;
    this.markers = {};
    this.ASPECT_RATIO = width / height;
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
        bounds: { northwest, southeast } = {},
        img: mapImage,
        zoom = 8
      } = {},
      members,
      position,
      totem,
    } = this.props;

    let { map: { center } = {}} = this.props;
    let NW_OVERLAY_COORD = null;
    let SE_OVERLAY_COORD = null;

    if (northwest) NW_OVERLAY_COORD = [ northwest.lat, northwest.lng ];
    if (southeast) SE_OVERLAY_COORD = [ southeast.lat, southeast.lng ];

    // If there is no center defined, set center to user's position
    if (!center) center = position;

    if (!center || !(center.lat && center.lng)) {
      return (
        <View style={mapStyles.empty}>
          <Text>
            Your location is inaccessible at this time.
          </Text>
        </View>
      );
    }

    return (
      <View style={mapStyles.container}>
        <MapView
          mapType={'terrain'}
          onPress={this.handleMapPress}
          provider={PROVIDER_GOOGLE}
          ref={ref => (this.map = ref)}
          style={mapStyles.map}
          showsPointsOfInterest={false}
          region={{
            latitude: center.lat,
            longitude: center.lng,
            latitudeDelta: 1 / (zoom * 10),
            longitudeDelta: 1 / (zoom * 10) * this.ASPECT_RATIO
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
        const { position: { lat, lng } = {}} = members[key];

        if (lat && lng && this.map) {
          const zoom = this.props.map.zoom || 8;
          const region = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 1 / (zoom * 10),
            longitudeDelta: 1 / (zoom * 10) * this.ASPECT_RATIO
          };

          this.map.animateToRegion(region);
        }
        if (this.markers[key]) {
          this.markers[key].showCallout();
        }
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

export default connect(({ map, group, venue, user }) => ({
  map: venue.venue.map,
  members: group.members,
  totem: group.totem,
  position: user.position,
  ...map
}))(MapViewer);
