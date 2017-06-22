import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';

const NavButton = ({ to, children, dispatch }, context) => (
  <TouchableHighlight
    onPress={() => {
      context.router.push(to);
    }}>
    {children}
  </TouchableHighlight>
);

NavButton.contextTypes = { router: PropTypes.object }

export default NavButton;
