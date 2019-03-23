/**
 **  All the imports are here.
 **/
import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from '../actions/actionTypes';

/**
 **  Login reducer is defined here.
 **/
const LoginReducer = (state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  shouldRedirect: false
}, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending,
        shouldRedirect: false
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        shouldRedirect: true
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError,
        shouldRedirect: false
      });

    default:
      return state;
  }
}

export default LoginReducer;