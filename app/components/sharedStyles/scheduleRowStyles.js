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
    padding: 10
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
  }
});
