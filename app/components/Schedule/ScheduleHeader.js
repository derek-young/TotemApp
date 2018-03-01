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

    this.allStages = { key: 'all', name: 'All Stages' };
  }

  render() {
    const {
      days,
      dayIndex,
      geofences,
      selectedStage
    } = this.props;
    const { menuOpen } = this.state;
    const toggleMenu = () => this.toggleMenu(!menuOpen);

    const stages = [ this.allStages ].concat(
      Object.values(geofences).filter(({ type }) => type === 'venue')
    );

    return (
      <View style={headerStyles.main}>
        <View style={headerStyles.top}>
          <TouchableOpacity
            onPress={toggleMenu}
            style={headerStyles.selector}>
            <Text style={headerStyles.headerText}>
              {days[dayIndex].format('dddd, MM/DD')}
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
              selectedValue={dayIndex}
              onValueChange={this.handleDayChange}
            >
              {days.map((day, i) => (
                <Picker.Item
                  key={day}
                  label={day.format('dddd, MM/DD')}
                  value={i}
                />
              ))}
            </Picker>
            <Picker
              itemStyle={headerStyles.headerText}
              style={headerStyles.picker}
              selectedValue={selectedStage.key}
              onValueChange={this.handleStageChange}
            >
              {stages.map(stage => (
                <Picker.Item
                  key={stage.key}
                  label={stage.name}
                  value={stage.key}
                />
              ))}
            </Picker>
          </View>
        }
      </View>
    );
  }

  handleDayChange = dayIndex => {
    updateFilterDay(dayIndex);
    this.toggleMenu(false);
  }

  handleStageChange = key => {
    const { geofences } = this.props;
    const geofence = key === 'all' ? this.allStages : geofences[key];

    updateFilterStage(geofence);
    this.toggleMenu(false);
  }

  toggleMenu = open => this.setState({ menuOpen: open });
}

export default ScheduleHeader;
