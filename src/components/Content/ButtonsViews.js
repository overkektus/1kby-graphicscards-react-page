import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'store'
import { changeView } from 'ducks/graphicscards'
import { Icon } from 'antd'
import './ButtonsViews.css'

class ButtonsViews extends Component {
  changeViewHandler = (viewType) => {
    dispatch(changeView(viewType))
  }

  render() {
    return(
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <span
          style={{
            marginRight: '10px'
          }}
        >Вид</span>
        <ul
          style={{
            display: 'flex'
          }}
        >
          <li>
            <Icon
              type='bars'
              className='change-view-icon'
              onClick={() => this.changeViewHandler('standart')}
            />
          </li>
          <li>
            <Icon
              type='appstore'
              className='change-view-icon'
              onClick={() => this.changeViewHandler('table')}
            />
          </li>
          <li>
            <Icon
              type='table'
              className='change-view-icon'
              onClick={() => this.changeViewHandler('list')}
            />
          </li>
        </ul>
      </section>

    )
  }
}

const mapStateToProps = (state) => ({
  viewType: state.graphicscards.viewType
})

export default connect(mapStateToProps)(ButtonsViews)
