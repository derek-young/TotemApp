import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  top: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  'profile-photo': {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  section: {
    marginBottom: 30
  },
  header: {
    borderBottomColor: 'rgba(107, 1, 1, 0.32)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  'header-text': {
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  button: {
    height: '100%',
    width: '100%',
    padding: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(107, 1, 1, 0.32)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});
