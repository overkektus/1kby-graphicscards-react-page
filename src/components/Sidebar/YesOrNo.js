import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonWithBadge from './ButtonWithBadge'
import './YesOrNo.css'

class YesOrNo extends Component {
  state = {
    choice: null
  }

  changeChoiceHandler() {

  }

  render() {
    const { yesCount, noCount, onChange } = this.props
    return(
      <div className='yes-or-no'>
        <ButtonWithBadge onClick={this.changeChoiceHandler} count={yesCount}>Да</ButtonWithBadge>
        <ButtonWithBadge onClick={this.changeChoiceHandler} count={noCount}>Нет</ButtonWithBadge>
      </div>
    )
  }
}

YesOrNo.propTypes = {
  yesCount: PropTypes.number.isRequired,
  noCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default YesOrNo
