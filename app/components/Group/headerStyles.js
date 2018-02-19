import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'black'
  },
  'top-text': {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5
  },
  'sort-options': {
    display: 'flex',
    flexDirection: 'row',
  },
  'button-wrapper': {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#2d2d2d',
    borderWidth: 1,
    paddingVertical: 10
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
