import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'scroll-view': {
    paddingBottom: 90 + 90 + 10 // Header height + (dial diameter + dial padding) + padding over dial
  },
  selected: {
    backgroundColor: 'rgba(219, 255, 252, 0.35)'
  },
  addButton: {
    color: 'rgba(0, 144, 0, 0.70)'
  },
  removeButton: {
    color: 'rgba(222, 0, 0, 0.70)'
  }
});
