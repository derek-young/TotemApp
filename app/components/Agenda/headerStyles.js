import { StyleSheet } from 'react-native';

import { totemBlue } from '../../colors';

export default StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
  headerText: {
    color: totemBlue
  },
  selector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  }
});
