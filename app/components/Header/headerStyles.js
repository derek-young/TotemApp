import { StyleSheet } from 'react-native';

import { totemBlue } from '../../colors';

export default StyleSheet.create({
  main: {
    alignSelf: 'stretch',
    height: 60,
    backgroundColor: totemBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  icon: {
    opacity: 0.6
  }
});
