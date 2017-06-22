import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  }
});
