import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    paddingTop: 120,
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    width: width - 100,
    resizeMode: 'contain'
  },
  button: {
    marginTop: 20,
    width: 240
  },
  loading: {
    display: 'flex',
  	alignItems: 'center',
    height: '100%',
    paddingTop: 90
  }
});
