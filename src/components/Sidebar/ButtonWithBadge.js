import React from 'react'
import PropTypes from 'prop-types'
import { Button, Badge } from 'antd'

const ButtonWithBadge = ({ children, count}) => (
  <Button>
    {children}
    <Badge
      count={count}
      overflowCount={999}
      style={{
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
        position:'relative',
        top: '-5px'
      }} />
  </Button>
)

ButtonWithBadge.propTypes = {
  children: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default ButtonWithBadge
