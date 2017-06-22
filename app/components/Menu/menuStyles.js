import { StyleSheet, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height,
    backgroundColor: 'transparent'
  },
  menu: {
    paddingTop: 20,
    backgroundColor: 'black',
    width: 150,
    height
  },
  menuItem: {
    height: 70
  },
  'menuItem__text': {
    color: 'white'
  }
});
