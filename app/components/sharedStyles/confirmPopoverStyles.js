import { StyleSheet } from 'react-native';
import { deepskyblue } from '../../colors';

const margin = 50;
const pSize = 30;
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
  cancel: {
    borderColor: '#FF695E',
    marginRight: 8
  },
  confirm: {
    borderColor: '#2ECC40'
  },
  ok: {
    borderColor: deepskyblue
  },
  'cancel-text': {
    color: '#FF695E',
    fontSize: 20,
    marginLeft: 10
  },
  'confirm-text': {
    color: '#2ECC40',
    fontSize: 20,
    marginLeft: 10
  },
  'ok-text': {
    color: deepskyblue,
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: hSize,
    fontWeight: 'bold',
    marginTop: 6
  },
  'body-text': {
    color: 'white',
    fontSize: pSize,
    marginBottom: 10
  },
});