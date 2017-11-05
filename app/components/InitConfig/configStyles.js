import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    marginTop: 50 + 10, // Header height plus top margin
    paddingBottom: 50, // Footer height
    position: 'relative',
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#222',
    height: 90,
  },
  headerText: {
    color: 'lightgrey',
    textAlign: 'center'
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0
  },
  'image-overlay': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    color: 'white',
    fontSize: 20,
    maxWidth: '70%',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    height: 173,
    opacity: 0.90,
  }
});
