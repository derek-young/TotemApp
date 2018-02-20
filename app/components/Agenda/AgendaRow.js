import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import Popover from './AgendaPopover';

import sharedRowStyles from '../../sharedStyles/scheduleRowStyles';

class AgendaRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopover: false
    };
  }

  render() {
    const { name, geofence, startTime, endTime } = this.props;
    const { showPopover } = this.state;
    const formattedTime = `${moment(startTime).format('h:mm a')} - ${moment(endTime).format('h:mm a')}`;

    return (
      <View style={sharedRowStyles.main}>
        <View>
          <Text style={sharedRowStyles.label}>
            {name.toUpperCase()}
          </Text>
          <Text style={sharedRowStyles.subtext}>
            {geofence.name}
          </Text>
          <Text style={sharedRowStyles.subtext}>
            {formattedTime}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.openPopover}
          style={sharedRowStyles.icon}
        >
          <Icon
            name="ellipsis-v"
            size={20}
          />
        </TouchableOpacity>
        <Popover
          close={this.closePopover}
          formattedTime={formattedTime}
          show={showPopover}
          {...this.props}
        />
      </View>
    );
  }

  closePopover = () => this.setState({ showPopover: false })
  openPopover = () => this.setState({ showPopover: true })
}

export default AgendaRow;
