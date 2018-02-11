import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  Callout,
  Marker
} from 'react-native-maps';
import moment from 'moment';

import mapStyles from './mapStyles';
import totemStyles from './totemStyles';

import { updateTotemCoords } from '../../redux/actions';
import basecampIcon from '../../img/loading.gif';

const Totem = ({ totem, placeTotem }) => (
  <Marker coordinate={totem.coords}>
    <Image
      source={basecampIcon}
      style={{ height: 80, width: 40 }}
    />
    <Callout tooltip style={mapStyles['callout-container']}>
      <View style={mapStyles['callout-window']}>
        <Text style={mapStyles.heading}>
          Basecamp
        </Text>
        {
          totem.meetupTime && !placeTotem &&
          <View>
            <Text style={mapStyles.subtext}>
              {`Meet ${moment(totem.meetupTime).fromNow()}`}
            </Text>
            <Text style={mapStyles.subtext}>
              {` at ${moment(totem.meetupTime).format('h:mm A')}`}
            </Text>
          </View>
        }
        {/*  Callouts currently do not suport clickable elements */}
        {/* <View style={totemStyles.remove}>
          <TouchableOpacity
            onPress={() => updateTotemCoords({})}
            style={totemStyles['remove-button']}
          >
            <Text style={totemStyles['remove-text']}>
              Remove
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={mapStyles['arrow-container']}>
        <View style={mapStyles['down-arrow']} />
      </View>
    </Callout>
  </Marker>
);

export default connect(({ group }) => ({
  placeTotem: group.placeTotem
}))(Totem);
