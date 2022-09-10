import api from '../util/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER,
  UPDATE_ERROR,
} from './type';

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/users/login', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try{
    const res = await api.put('/users/update', formData);

    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    })
    
    window.location.reload(false);
  }catch(err){
    dispatch({
      type: UPDATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Logout
export const logout = () => ({ type: LOGOUT });
