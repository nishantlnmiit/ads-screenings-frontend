import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/root'
import logger from 'redux-logger';
//import { Loading } from './middlewares/Loading'
 
/**
 * Create Middleware
 */
const middleware = applyMiddleware(thunk, logger)

/**
 * Create Store
 */
const store = createStore(reducers, middleware)

export default store