import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
  'profile-icon': {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  'info-window': {
    width: 100
  },
  subtext: {
    color: 'darkgrey',
    fontStyle: 'italic',
    fontSize: 12,
  }
});
