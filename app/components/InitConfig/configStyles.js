import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    marginTop: 50 + 10, // Header height plus top margin
    paddingBottom: 50, // Footer height
    position: 'relative',
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: 100
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent'
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
  input: {
    height: '100%',
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 5
  },
  inputWrapper: {
    marginTop: 40,
    marginBottom: 30,
    height: 40,
    width: '80%'
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  'row-text': {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    height: 173,
    opacity: 0.90,
  }
});
