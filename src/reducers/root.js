import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
 
 
/**
 * Combine Reducers in One Object
 */
export default combineReducers({
  LoginReducer:LoginReducer
 }) 