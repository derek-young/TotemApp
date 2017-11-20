import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import headerStyles from './headerStyles';
import {
  updateDay,
  updateStage
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
              {selectedDay}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleMenu}
            style={headerStyles.selector}>
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
              onValueChange={this.handleDayChange}
            >
              {days.map(day => (
                <Picker.Item key={day} label={day} value={day} />
              ))}
            </Picker>
            <Picker
              itemStyle={headerStyles.headerText}
              style={headerStyles.picker}
              selectedValue={selectedStage}
              onValueChange={this.handleStageChange}
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

  handleDayChange = day => {
    updateDay(day);
    this.toggleMenu(false);
  }

  handleStageChange = stage => {
    updateStage(stage);
    this.toggleMenu(false);
  }

  toggleMenu = open => this.setState({ menuOpen: open });
}

export default ScheduleHeader;
