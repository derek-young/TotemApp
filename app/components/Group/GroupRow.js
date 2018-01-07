import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { getArtist } from '../../redux/actions';
import styles from '../../styles';
import rowStyles from './rowStyles';

import Popover from './GroupPopover';
import LeaveGroupPopover from './LeaveGroupPopover';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopover: false,
      showLeaveGroup: false
    };
  }

  render() {
    const { geofence, img, name, position = {} } = this.props;
    const { showPopover, showLeaveGroup } = this.state;
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
            (geofence && !!geofence.name)
            &&
            <Text>
              {geofence.name.concat(artist)}
            </Text>
          }
          <Text style={styles.subtext}>
            Last updated: {moment(position.timestamp).fromNow()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.openPopover}
          style={rowStyles.right}
        >
          <Icon name="ellipsis-v" size={20} color="#000" />
        </TouchableOpacity>
        <Popover
          artist={artist}
          close={this.closePopover}
          closeLeaveGroup={this.closeLeaveGroup}
          openGroupPopover={this.openPopover}
          openLeaveGroup={this.openLeaveGroup}
          show={showPopover}
          showLeaveGroup={showLeaveGroup}
          {...this.props}
        />
        {
          showLeaveGroup &&
          <LeaveGroupPopover
            close={this.closeLeaveGroup}
            openGroupPopover={this.openPopover}
            show={showLeaveGroup}
          />
        }
      </View>
    );
  }

  closePopover = () => this.setState({ showPopover: false })
  closeLeaveGroup = () => this.setState({ showLeaveGroup: false })
  openPopover = () => this.setState({ showPopover: true })
  openLeaveGroup = () => this.setState({ showLeaveGroup: true })
}

export default Row;
