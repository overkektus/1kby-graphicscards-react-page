import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
import _ from 'lodash'
import { API } from '../service'

export const REDUCER = 'GRAPHICSCARDS'
const NS = `${REDUCER}__`

const initialState ={
  data: {},
  isLoading: false,
}

const reducer = createReducer({}, initialState)

const readRequest = createAction(`${NS}READ_REQUEST`);
reducer.on(readRequest, state => ({
  ...state,
  isLoading: true,
}))

const readSuccess = createAction(`${NS}READ_SUCCESS`)
reducer.on(readSuccess, (state, items) => ({
  ...state,
  isLoading: false
}))

const readFailure = createAction(`${NS}READ_FAILURE`)
reducer.on(readFailure, (state) => ({
  ...state,
  isLoading: false
}))

export const readGoods = () => dispatch => {
  dispatch(readRequest())
  return axios
    .get(`${API}graphicscards/`)
    .then(({ status, statusText, data }) => {
      if(status !== 200) {
        throw new Error(statusText)
      }
      dispatch(readSuccess(data))
    })
    .catch(error => {
      dispatch(readFailure())
      return Promise.reject(error)
    })
}

export default reducer
