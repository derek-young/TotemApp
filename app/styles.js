import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgba(255, 120, 113, 0.5)'
    // backgroundColor: 'linear-gradient(to bottom right, #ffe482, rgba(255, 120, 113, 0.5))'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#000033',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  scrollView: {
    overflow: 'scroll'
  }
});
