import React, { Component } from 'react';
import {
  Picker,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import headerStyles from './headerStyles';
import {
  updateFilterDay
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
      dayIndex
    } = this.props;
    const { menuOpen } = this.state;

    return (
      <View style={headerStyles.main}>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={headerStyles.selector}
        >
          {
            days[dayIndex]
            &&
            <Text style={headerStyles.headerText}>
              {days[dayIndex].format('dddd, MM/DD')}
            </Text>
          }
        </TouchableOpacity>
        {
          menuOpen &&
          <Picker
            itemStyle={headerStyles.headerText}
            onValueChange={this.handleDayChange}
            selectedValue={dayIndex}
            style={headerStyles.picker}
          >
            {days.map((day, i) => (
              <Picker.Item
                key={day}
                label={day.format('dddd, MM/DD')}
                value={i}
              />
            ))}
          </Picker>
        }
      </View>
    );
  }

  handleDayChange = dayIndex => {
    updateFilterDay(dayIndex);
    this.toggleMenu(null, false);
  }

  toggleMenu = (e, open = !this.state.menuOpen) => (
    this.setState({ menuOpen: open })
  )
}

export default AgendaHeader;
