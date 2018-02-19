import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'black'
  },
  id: {
    paddingTop: 7,
    paddingBottom: 3,
  },
  'id-text': {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  'top-text': {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 7,
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
