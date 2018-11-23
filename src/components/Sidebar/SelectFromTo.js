import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import './SelectFromTo.css'

const { Option } = Select
class SelectFromTo extends Component {
  state = {
    from: null,
    to: null
  }
  render() {
    const { source } = this.props
    const options = source.map((item) => <Option value={item}>{item}</Option>)
    return(
      <div className='select-from-to'>
        <div className='select-from-to__item'>
          от:
          <Select style={{ marginLeft: 5 }}>
            {options}
          </Select>
        </div>
        <div className='select-from-to__item'>
          до:
          <Select style={{ marginLeft: 5 }}>
            {options}
          </Select>
        </div>
      </div>
    )
  }
}

SelectFromTo.propTypes = {
  source: PropTypes.arrayOf(PropTypes.string)
}

export default SelectFromTo
