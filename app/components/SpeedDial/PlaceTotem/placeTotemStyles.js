import { StyleSheet } from 'react-native';

import { totemBlue } from '../../../colors';

export default StyleSheet.create({
  main: {
  },
  'title-container': {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  'totem-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  'body-text': {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 25
  },
  'option-text': {
    textAlign: 'center',
    color: 'white'
  },
  'select-text': {
    color: totemBlue
  },
  emphasis: {
    fontStyle: 'italic'
  },
  'meetup-time': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  }
});
