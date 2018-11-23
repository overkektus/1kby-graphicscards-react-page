import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import graphicscards from './graphicscards'
import form from './form'

const reducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    graphicscards,
    form
  })
}

export default reducer
