import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 3
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(34, 36, 38, .15)',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  'body-top': {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },
  'body-bottom': {
    paddingBottom: 15,
  },
  'body-text': {
    fontSize: 20
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#DB2828',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3
  },
  'button-text': {
    color: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
