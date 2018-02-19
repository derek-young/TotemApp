import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'scroll-view': {
    paddingBottom: 90 + 90 + 10 // Header height + (dial diameter + dial padding) + padding over dial
  },
  empty: {
    display: 'flex',
    alignItems: 'center',
    padding: 10
  },
  'info-text': {
    backgroundColor: 'transparent'
  }
});
