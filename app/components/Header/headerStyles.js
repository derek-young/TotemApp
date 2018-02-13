import { StyleSheet } from 'react-native';

import { totemBlue } from '../../colors';

export default StyleSheet.create({
  main: {
    alignSelf: 'stretch',
    height: 90,
    backgroundColor: totemBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  icon: {
    width: 30,
    opacity: 0.6
  }
});
