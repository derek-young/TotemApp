import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import headerStyles from './headerStyles';
import {
  updateDay
} from '../../redux/actions';

class AgendaHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    const {
      days,
      selectedDay,
    } = this.props;
    const { menuOpen } = this.state;
    const toggleMenu = () => this.toggleMenu(!menuOpen);

    return (
      <View style={headerStyles.main}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={headerStyles.selector}
        >
          <Text style={headerStyles.headerText}>
            {selectedDay.format('dddd')}
          </Text>
        </TouchableOpacity>
        {
          menuOpen &&
          <Picker
            itemStyle={headerStyles.headerText}
            onValueChange={this.handleDayChange}
            selectedValue={selectedDay}
            style={headerStyles.picker}
          >
            {days.map(day => (
              <Picker.Item
                key={day}
                label={day.format('dddd')}
                value={day}
              />
            ))}
          </Picker>
        }
      </View>
    );
  }

  handleDayChange = day => {
    updateDay(day);
    this.toggleMenu(false);
  }

  toggleMenu = open => this.setState({ menuOpen: open });
}

export default AgendaHeader;
