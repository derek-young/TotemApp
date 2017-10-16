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
    backgroundColor: '#222',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  row: {
    fontSize: 16,
  },
  thumbnail: {
    width: '100%',
    height: 173,
    opacity: 0.90,
  }
});
