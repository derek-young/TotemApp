import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
  empty: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  'profile-icon': {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  'callout-container': {
    position: 'relative',
  },
  'callout-window': {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 3
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 3
  },
  subtext: {
    fontStyle: 'italic',
    fontSize: 12,
  },
  'arrow-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 13
  },
  'down-arrow': {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 10,
    borderRightColor: 'transparent',
    borderRightWidth: 10,
    borderTopColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 10,
    borderStyle: 'solid',
  }
});
