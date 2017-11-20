import { combineReducers } from 'redux';
import auth from './authReducer';
import group from './groupReducer';
import menu from './menuReducer';
import schedule from './scheduleReducer';
import user from './userReducer';
import venue from './venueReducer';

export default combineReducers({
  auth,
  group,
  menu,
  schedule,
  user,
  venue
});
