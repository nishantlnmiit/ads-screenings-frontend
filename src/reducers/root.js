import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
 
 
/**
 * Combine Reducers In One Object
 */
export default combineReducers({
  LoginReducer:LoginReducer
 }) 