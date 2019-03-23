import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR}  from './actionTypes';
import axios from 'axios';
import {GLOBAL_API_URL ,API_ROUTES} from '../globalConfig';
import {setCookie ,getCookie} from '../common';

export const  login  = (email, password) => {
  return dispatch => {
    // dispatch(setLoginPending(true));
    // dispatch(setLoginSuccess(false));
    // dispatch(setLoginError(null));

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
 

const setLoginPending = (isLoginPending) => {
   return {
    type: SET_LOGIN_PENDING,
    isLoginPending,
  }
}


const setLoginSuccess = (isLoginSuccess) => {
   return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess,
  }
}

const setLoginError = (loginError) => {
   return {
    type: SET_LOGIN_ERROR,
    loginError,
  }
}

function callLoginApi(email, password, callback) {

      axios({
        method: 'post',
        url: GLOBAL_API_URL+API_ROUTES.LOGIN ,
        data: {
          email: email,
          password: password
        }
      }).then(response => {
          const data = response.data;
          console.log(data);
          if(data.token){
            console.log(data.token);
            console.log(getCookie("token"))
            setCookie("token" , data.token , 1)
            localStorage.setItem("refreshToken", data.refreshToken)
          }else {
              return callback(new Error(data.message));
          }
         
         return callback(null);

    }).catch(error => {
        return callback(new Error('Invalid email and password'));
     });

     
}