import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import totemStyles from './placeTotemStyles';

class MeetupPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: '',
      minute: ''
    };

    this.hourOptions = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.minuteOptions = ['', '00', '05'];
    this.meridiems = ['AM', 'PM'];

    for (let i = 10; i < 60; i += 5) {
      this.minuteOptions.push(String(i));
    }
  }

  render() {
    const { hour, minute } = this.state;

    return (
      <View>
        <TouchableOpacity style={totemStyles['meetup-time']}>
          <Text style={totemStyles['body-text']}>
            Meetup at: {this.getDisplayTime(hour, minute)}
          </Text>
        </TouchableOpacity>
        {/* <Picker
          itemStyle={totemStyles['select-text']}
          selectedValue={hour}
          onValueChange={this.handleHourChange}
        >
          {this.hourOptions.map(option => (
            <Picker.Item
              key={option}
              label={option}
              value={option}
            />
          ))}
        </Picker> */}
        <View></View>
      </View>
    );
  }

  getDisplayTime = (hour, minute) => (
    hour
    ?
    `${hour}:${minute || '00'} AM`
    :
    <Text style={[{ color: 'lightslategrey' }, totemStyles.emphasis ]}>
      &nbsp;unset
    </Text>
  )

  handleHourChange = hour => {
    console.log('hour', hour)
    this.setState({ hour });
  }

  handleMinuteChange = minute => {
    console.log('minute', minute)
    this.setState({ minute });
  }
}

export default MeetupPicker;
