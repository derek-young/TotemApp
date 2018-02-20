import React, { Component } from 'react';
import {
  Animated,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { toggleMenu } from '../../redux/actions';
import MenuItem from './MenuItem';
import menuStyles from './menuStyles';

class Menu extends Component {
  render() {
    if (!this.props.menuVisible) {
      return null;
    }

    return (
      <TouchableHighlight
        style={menuStyles.main}
        underlayColor="transparent"
        onPress={toggleMenu}>
        <Animated.View style={menuStyles.menu}>
          <View style={menuStyles['menu-items']}>
            {this.getMenuItems().map(this.renderMenuItem)}
          </View>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            v1.0.2
          </Text>
        </Animated.View>
      </TouchableHighlight>
    );
  }

  renderMenuItem = item => (
    <MenuItem
      key={item.path}
      history={this.props.history}
      {...item}
    />
  )

  getMenuItems = () => {
    const { scheduleItems } = this.props;
    const hasScheduleItems = scheduleItems && Object.keys(scheduleItems).length > 0;
    const menuItems = [
      { path: 'map', text: 'Map', icon: 'map', color: '#f9d6ff' },
      { path: 'group', text: 'Group', icon: 'users', color: '#dddaff' },
      // TODO: Implement a chat feature for the application
      // { path: 'chat', text: 'Chat', icon: 'comment-o', color: '#ffd5d5' },
    ];

    if (hasScheduleItems) {
      menuItems.push(
        { path: 'agenda', text: 'Agenda', icon: 'pencil-square-o', color: '#ddffd6' },
        { path: 'schedule', text: 'Schedule', icon: 'clock-o', color: '#fffecc' }
      );
    }

    // Keep as last item in menu
    menuItems.push({ path: 'profile', text: 'Profile', icon: 'user', color: '#ffd5d5' });

    return menuItems;
  }
}

export default connect(({ menu, venue }) => ({
  menuVisible: menu.menuVisible,
  scheduleItems: venue.venue.scheduleItems,
}))(Menu);
