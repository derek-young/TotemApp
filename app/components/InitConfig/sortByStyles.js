import { StyleSheet } from 'react-native';

import { popoverTransparency } from '../../colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
    backgroundColor: popoverTransparency
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40
  },
  'icon-wrapper': {
    display: 'flex',
    flexDirection: 'row',
  },
  'option-text': {
    color: 'white',
    marginLeft: 12
  },
  'cancel': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'black'
  }
});
