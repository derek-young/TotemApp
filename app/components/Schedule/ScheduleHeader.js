import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import headerStyles from './headerStyles';
import {
  updateFilterDay,
  updateFilterStage
} from '../../redux/actions';

class ScheduleHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    const {
      days,
      stages,
      selectedDay,
      selectedStage
    } = this.props;
    const { menuOpen } = this.state;
    const toggleMenu = () => this.toggleMenu(!menuOpen);

    return (
      <View style={headerStyles.main}>
        <View style={headerStyles.top}>
          <TouchableOpacity
            onPress={toggleMenu}
            style={headerStyles.selector}>
            <Text style={headerStyles.headerText}>
              {selectedDay.format('dddd, MM/DD')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleMenu}
            style={headerStyles.selector}>
            <Text style={headerStyles.headerText}>
              {selectedStage.name}
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
              onValueChange={this.handleDayChange}
            >
              {days.map(day => (
                <Picker.Item
                  key={day}
                  label={day.format('dddd, MM/DD')}
                  value={day}
                />
              ))}
            </Picker>
            <Picker
              itemStyle={headerStyles.headerText}
              style={headerStyles.picker}
              selectedValue={selectedStage}
              onValueChange={this.handleStageChange}
            >
              {stages.map(stage => (
                <Picker.Item
                  key={stage.key}
                  label={stage.name}
                  value={stage}
                />
              ))}
            </Picker>
          </View>
        }
      </View>
    );
  }

  handleDayChange = day => {
    updateFilterDay(day);
    this.toggleMenu(false);
  }

  handleStageChange = stage => {
    updateFilterStage(stage);
    this.toggleMenu(false);
  }

  toggleMenu = open => this.setState({ menuOpen: open });
}

export default ScheduleHeader;
