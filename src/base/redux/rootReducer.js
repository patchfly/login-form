import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from 'modules/auth/redux/reducers';

export default combineReducers({
  auth,
  form: formReducer
});
