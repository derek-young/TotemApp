import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  remove: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
  },
  'remove-button': {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 5
  },
  'remove-text': {
    fontSize: 12,
    color: 'red'
  }
});
