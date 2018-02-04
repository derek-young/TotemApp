import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    borderBottomColor: 'rgba(99, 52, 1, 0.25)',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'rgba(163, 216, 204, 0.2)',
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: 70,
    height: '100%'
  },
  label: {
    fontSize: 18,
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20
  }
});
