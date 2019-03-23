/**
 **  All the imports are here.
 **/
import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from './actionTypes';
import axios from 'axios';
import querystring from 'querystring';
import {
  GLOBAL_API_URL,
  API_ROUTES
} from '../globalConfig';
import {
  setCookie,
  getCookie
} from '../common';

/**
 **  login action creator
 **/
export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

/**
 **  Set login pending action
 **/
export const setLoginPending = (isLoginPending) => {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending,
  }
}

/**
 **  Set login success action
 **/
export const setLoginSuccess = (isLoginSuccess) => {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess,
  }
}

/**
 **  Set login error action
 **/
export const setLoginError = (loginError) => {
  return {
    type: SET_LOGIN_ERROR,
    loginError,
  }
}

function callLoginApi(email, password, callback) {
  var data = {
    email: email,
    password: password
  }
  axios({
    method: 'post',
    url: GLOBAL_API_URL + API_ROUTES.LOGIN,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'

    },
    data: querystring.stringify(data)

  }).then(response => {
    const data = response.data;
    console.log(data);
    if (data.token) {
      console.log(data.token);
      console.log(getCookie("token"))
      setCookie("token", data.token, 1)
      localStorage.setItem("refreshToken", data.refreshToken)
    } else {
      return callback(new Error(data.message));
    }

    return callback(null);

  }).catch(error => {
    console.log(error);
    return callback(new Error(error.message));
  });


}