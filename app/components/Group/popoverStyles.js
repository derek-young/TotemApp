import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body-top-left': {
    flex: 1,
    marginRight: 5
  },
  'action-wrapper': {
    display: 'flex',
    flexDirection: 'row'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(34, 36, 38, .15)',
    borderRadius: 2,
    marginRight: 5
  }
});
