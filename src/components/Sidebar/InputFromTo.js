import React, { Component } from 'react'
import { InputNumber } from 'antd'
import './InputFromTo.css'

class InputFromTo extends Component {
  state = {
    from: null,
    to: null
  }

  changeInputHandler(value, type) {
    if(type === 'from') {
      this.setState((state) => ({
        ...state,
        from: value
      }))
    } else {
      this.setState((state) => ({
        ...state,
        to: value
      }))
    }
  }

  render() {
    return(
      <div className='input-from-to'>
        <div className='input-from-to__item'>
          <p className='input-form-to__title'>от:</p>
          <InputNumber onChange={(value) => this.changeInputHandler(value, 'from')}/>
        </div>
        <div className='input-from-to__item'>
          <p className='input-form-to__title'>до:</p>
          <InputNumber onChange={(value) => this.changeInputHandler(value, 'to')}/>
        </div>
      </div>
    )
  }
}

export default InputFromTo
