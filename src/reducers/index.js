import { combineReducers } from 'redux';
import authReducer from './auth';
import alertReducer from './alert';
import postReducer from './post';

export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    post: postReducer
});
