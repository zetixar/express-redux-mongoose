import { FETCH_USER, LOGOUT } from 'constants/ActionTypes'

export default function auth(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    case LOGOUT:
      return false
    default:
      return state
  }
}
