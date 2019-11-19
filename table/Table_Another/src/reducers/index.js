import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import snackbar from './snackbar';
import locale from './locale';

export default combineReducers({
  alert,
  auth,
  snackbar,
  locale
});
