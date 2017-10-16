import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    paddingTop: 120,
    alignItems: 'center'
  },
  logo: {
    width: width - 100,
    resizeMode: 'contain'
  },
  button: {
    marginTop: 20,
    width: 175
  },
  loading: {
    flex: 1,
  	alignItems: 'center',
    justifyContent: 'center'
  }
});
