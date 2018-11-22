import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Badge } from 'antd'

const Item = ({ title, count }) => (
  <div>
    <Checkbox
      disabled={count}
      style={{
        fontSize: "0.75em"
      }}
    >{title}</Checkbox>
    <Badge count={count} overflowCount={1000}/>
  </div>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default Item
