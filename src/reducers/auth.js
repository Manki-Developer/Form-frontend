import {
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    ACCOUNT_DELETED,
    UPDATE_USER,
    UPDATE_ERROR,
} from '../actions/type';
  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: {},
};
  
function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
          username: payload.username,
          email: payload.email,
          name: payload.name,
        };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        };
        case UPDATE_USER:
        return{
            ...state,
            user: payload,
            loading:false,
        }
        case UPDATE_ERROR:
        return {
            ...state,
            error: payload,
            loading: false,
        };
        case ACCOUNT_DELETED:
        case AUTH_ERROR:
        case LOGOUT:
        return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
        };
        default:
        return state;
    }
}
  
  export default authReducer;
  