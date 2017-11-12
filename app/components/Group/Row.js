import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { getArtist } from '../../redux/actions';
import rowStyles from './rowStyles';

const Row = ({
  member: { geofence, img, name, position = {}}
}) => {
  const artist = geofence && geofence.key ? ` - ${getArtist(geofence.key)}` : '';

  return (
    <View style={rowStyles.main}>
      <View>
        <Image
          style={rowStyles.image}
          source={{ uri: img }}
        />
      </View>
      <View style={rowStyles.center}>
        <Text style={rowStyles.label}>{name}</Text>
        {
          (geofence && geofence.name)
          &&
          <Text>
            {geofence.name + artist}
          </Text>
        }
        <Text style={rowStyles.subtext}>
          Last updated: {moment(position.timestamp).fromNow()}
        </Text>
      </View>
      <View>
        <Icon name="ellipsis-v" size={20} color="#000" />
      </View>
    </View>
  );
}

export default Row;
