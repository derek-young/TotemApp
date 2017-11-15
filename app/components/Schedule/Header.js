import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import headerStyles from './headerStyles';

class ScheduleHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    const {
      days = [ 'Friday', 'Saturday', 'Sunday' ],  // Update to moment object
      stages = [ 'Sahara', 'Yuma', 'Mojave', 'Goji' ],
      selectedDay = 'Friday',
      selectedStage = 'All Stages'
    } = this.props;
    const { menuOpen } = this.state;

    return (
      <View style={headerStyles.main}>
        <View style={headerStyles.top}>
          <TouchableOpacity style={headerStyles.selector}>
            <Text style={headerStyles.headerText}>
              {selectedDay}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyles.selector}>
            <Text style={headerStyles.headerText}>
              {selectedStage}
            </Text>
          </TouchableOpacity>
        </View>
        {
          menuOpen &&
          <View style={headerStyles.bottom}>
            <Picker
              itemStyle={headerStyles.headerText}
              style={headerStyles.picker}
              selectedValue={selectedDay}
              onValueChange={(itemValue, itemIndex) => console.log('Update day in store', itemValue)}
            >
              {days.map(day => (
                <Picker.Item key={day} label={day} value={day} />
              ))}
            </Picker>
            <Picker
              style={headerStyles.picker}
              selectedValue={selectedStage}
              onValueChange={(itemValue, itemIndex) => console.log('Update stage in store', itemValue)}
            >
              {stages.map(stage => (
                <Picker.Item key={stage} label={stage} value={stage} />
              ))}
            </Picker>
          </View>
        }
      </View>
    );
  }
}

export default ScheduleHeader;
