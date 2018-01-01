import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  View
} from 'react-native';
import {
  Callout,
  Marker
} from 'react-native-maps';
import moment from 'moment';

import mapStyles from './mapStyles';

const Totem = ({ totem, placeTotem }) => {
  const basecampIcon = require('../../img/loading.gif');

  return (
    <Marker
      // coordinate={totem.coords}
      coordinate={{
        latitude: 40.049,
        longitude: -105.28155
      }}
    >
      <Image
        source={basecampIcon}
        style={{ height: 80, width: 40 }}
      />
      <Callout>
        <View style={mapStyles['info-window']}>
          <Text>Basecamp</Text>
          {
            totem.meetupTime && !placeTotem &&
            <View>
              <Text>
                {`Meet ${moment(totem.meetupTime).fromNow()}`}
              </Text>
              <Text style={mapStyles.subtext}>
                {` at ${moment(totem.meetupTime).format('h:mm A')}`}
              </Text>
            </View>
          }
        </View>
      </Callout>
    </Marker>
  );
}

export default connect(({ group }) => ({
  placeTotem: group.placeTotem
}))(Totem);
