import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe482',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  scrollView: {
    overflow: 'scroll'
  },
  subtext: {
    fontSize: 12,
    color: '#5f6b6d'
  },
  'info-text': {
    backgroundColor: 'transparent',
    marginBottom: 5,
    textAlign: 'center'
  }
});
