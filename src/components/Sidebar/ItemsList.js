import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import Item from './Item'

// const { List: ListItem } = List

const ItemsList = ({ items }) => (
  <div
    style={{
      maxHeight: '300px',
      overflowY: 'auto'
    }}
  >
    <List
      dataSource={items}
      renderItem={item => (<List.Item><Item title={item.title} count={item.count}/></List.Item>)}
    />
  </div>
)

ItemsList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })
}

export default ItemsList
