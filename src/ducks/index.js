import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import graphicscards from './graphicscards'

const reducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    graphicscards
  })
}

export default reducer
