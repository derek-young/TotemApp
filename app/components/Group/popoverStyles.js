import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body-top-left': {
    flex: 1,
    marginRight: 5
  },
  'row-wrapper': {
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
  },
  agenda: {
    height: 125,
    paddingTop: 7,
  },
  'agenda-day': {
    marginBottom: 7,
  },
  'agenda-item': {
    fontSize: 12
  },
  'shared-item': {
    color: '#00a7de'
  },
  column: {
    paddingRight: 10
  }
});
