import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    marginTop: 90, // Header height
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    minHeight: 90
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    height: 32,
    paddingHorizontal: 20,
  },
  'filter-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    backgroundColor: 'black',
    borderRadius: 3,
  },
  filter: {
    flexGrow: 1,
    color: 'lightgrey',
    lineHeight: 32,
    marginTop: 2, // Forces vertical alignment of text
  },
  'icon-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 32, // Options height minus vertical padding
  },
  'menu-wrapper': {
    marginLeft: 20,
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
