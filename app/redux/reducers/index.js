import { combineReducers } from 'redux';
import auth from './authReducer';
import config from './configReducer';
import group from './groupReducer';
import map from './mapReducer';
import menu from './menuReducer';
import schedule from './scheduleReducer';
import user from './userReducer';
import venue from './venueReducer';

export default combineReducers({
  auth,
  config,
  group,
  map,
  menu,
  schedule,
  user,
  venue
});
