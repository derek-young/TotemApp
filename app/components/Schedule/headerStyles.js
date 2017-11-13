import { StyleSheet } from 'react-native';

import { totemBlue } from '../../colors';

export default StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  picker: {
    width: '50%'
  },
  headerText: {
    color: totemBlue
  },
  selector: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  }
});
