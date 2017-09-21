import { combineReducers } from 'redux'
import counter from './counterReducer'
// import auth from './authReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  counter,
  auth: authReducer,
})

export default rootReducer
