import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(107, 1, 1, 0.32)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 10,
  },
  selected: {
    backgroundColor: 'rgba(219, 255, 252, 0.35)'
  },
  label: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  },
  addButton: {
    color: 'rgba(0, 144, 0, 0.70)'
  },
  removeButton: {
    color: 'rgba(222, 0, 0, 0.70)'
  }
});
