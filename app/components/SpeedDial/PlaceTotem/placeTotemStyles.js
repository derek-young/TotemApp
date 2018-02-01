import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  'title-container': {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  section: {
    marginBottom: 25
  },
  'totem-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  'body-text': {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  'option-text': {
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
  'picker-container': {
    position: 'absolute',
    height: 270,
    width,
    bottom: 0,
    backgroundColor: 'white'
  },
  'picker-top': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'picker-bottom': {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    borderStyle: 'solid',
    height: 50,
  },
  picker: {
    width: 36,
  },
  'picker-button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  'first-button': {
    borderRightColor: 'lightgrey',
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  'picker-text': {
    fontSize: 20
  },
  'done-text': {
    color: 'deepskyblue'
  },
  emphasis: {
    fontStyle: 'italic'
  },
  'meetup-time': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  }
});
