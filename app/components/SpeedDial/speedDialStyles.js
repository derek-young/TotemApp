import { StyleSheet } from 'react-native';

import { popoverTransparency } from '../../colors';

const DIAL_DIAMETER = 70;
const ITEM_IMG_DIAMETER = 60;
const PADDING = 20;

export default StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    backgroundColor: popoverTransparency,
    position: 'absolute',
    paddingHorizontal: PADDING,
    paddingBottom: (PADDING * 2) + DIAL_DIAMETER
  },
  dial: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: PADDING,
    bottom: PADDING,
    height: DIAL_DIAMETER,
    width: DIAL_DIAMETER,
    borderRadius: DIAL_DIAMETER / 2,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 35,
    backgroundColor: 'deepskyblue',
  },
  'item-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: (DIAL_DIAMETER - ITEM_IMG_DIAMETER) / 2,
    marginTop: 20
  },
  'action-item': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10
  },
  'item-image': {
    height: ITEM_IMG_DIAMETER,
    width: ITEM_IMG_DIAMETER,
    borderRadius: ITEM_IMG_DIAMETER / 2,
  },
  'item-text': {
    fontSize: 20,
    color: 'white'
  }
});
