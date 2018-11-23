import { createAction, createReducer } from 'redux-act'
import Manufacturers from '../components/Content/Manufacturers'

export const REDUCER = 'FORM'
const NS = `${REDUCER}__`

const initialState = {
  opened: [
    'search',
    'price',
    'showGoods',
    'manufacturers',
    'type',
    'videoProcessor',
    'sizeOfMemory',
    'memoryBus'
  ],
  query: {
    price: {
      from: null,
      to: null
    },
    showGoods: null,
    manufacturer: null,
    type: null,
    videoProcessor: null,
    slots: null,
    typeOfMemory: null,
    sizeOfMemory: {
      from: null,
      to: null
    },
    memoryBus: {
      from: null,
      to: null
    },
    lowProfile: null,
    sliCrossfire: null,
    directX: null,
    vga: null,
    hdmi: null,
    miniHdmi: null,
    displayPort: null,
    additionalPowerSupply: null
  }
}

const reducer = createReducer({}, initialState)

export default reducer
