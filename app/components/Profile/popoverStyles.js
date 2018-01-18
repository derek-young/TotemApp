import { StyleSheet } from 'react-native';

const margin = 50;
const hSize = 40;

export default StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    padding: 30
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: margin
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: margin
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 120,
    borderWidth: 3,
    borderRadius: 3,
    borderStyle: 'solid',
  },
  title: {
    color: 'white',
    fontSize: hSize,
    fontWeight: 'bold'
  }
});
