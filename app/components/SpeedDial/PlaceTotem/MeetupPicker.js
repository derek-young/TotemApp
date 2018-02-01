import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import totemStyles from './placeTotemStyles';

const hourOptions = [ '',
  '01', '02', '03',
  '04', '05', '06',
  '07', '08', '09',
  '10', '11', '12'
];
const minuteOptions = ['', '00', '05'];
const meridiems = ['', 'AM', 'PM'];

for (let i = 10; i < 60; i += 5) {
  minuteOptions.push(String(i));
}

class MeetupPicker extends Component {
  constructor(props) {
    super(props);

    const { hour, minute, meridiem } = this.props;

    this.state = {
      originalHour: hour,
      originalMinute: minute,
      originalMeridiem: meridiem
    };
  }

  render() {
    const {
      closePicker,
      hour,
      minute,
      meridiem,
      handleHourChange,
      handleMinuteChange,
      handleMeridiemChange
    } = this.props;

    return (
      <View style={totemStyles['picker-container']}>
        <View style={totemStyles['picker-top']}>
          <Picker
            style={totemStyles.picker}
            selectedValue={hour}
            onValueChange={handleHourChange}
          >
            {hourOptions.map(option => (
              <Picker.Item
                key={option}
                label={option}
                value={option}
              />
            ))}
          </Picker>
          <Text style={totemStyles['picker-text']}>:</Text>
          <Picker
            style={totemStyles.picker}
            selectedValue={minute}
            onValueChange={handleMinuteChange}
          >
            {minuteOptions.map(option => (
              <Picker.Item
                key={option}
                label={option}
                value={option}
              />
            ))}
          </Picker>
          <Picker
            style={totemStyles.picker}
            selectedValue={meridiem}
            onValueChange={handleMeridiemChange}
          >
            {meridiems.map(option => (
              <Picker.Item
                key={option}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>
        <View style={totemStyles['picker-bottom']}>
          <TouchableOpacity
            onPress={this.resetPickers}
            style={[ totemStyles['picker-button'], totemStyles['first-button'] ]}
          >
            <Text style={totemStyles['picker-text']}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closePicker}
            style={totemStyles['picker-button']}
          >
            <Text style={[ totemStyles['picker-text'], totemStyles['done-text'] ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  resetPickers = () => {
    const {
      originalHour,
      originalMinute,
      originalMeridiem
    } = this.state;

    const {
      closePicker,
      handleHourChange,
      handleMinuteChange,
      handleMeridiemChange
    } = this.props;

    handleHourChange(originalHour);
    handleMinuteChange(originalMinute);
    handleMeridiemChange(originalMeridiem);
    closePicker();
  }
}

export default MeetupPicker;
