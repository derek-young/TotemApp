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
  member: { geofence, img, label, position = {}}
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
        <Text>{label}</Text>
        <Text>
          {geofence && geofence.name ? geofence.name + artist : ''}
        </Text>
        <Text>
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
