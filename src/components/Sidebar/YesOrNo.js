import React from 'react'
import PropTypes from 'prop-types'
import ButtonWithBadge from './ButtonWithBadge'

const YesOrNo = ({ yesCount, noCount }) => (
  <div style={{ display: 'flex', justifyContent: 'center'}}>
    <ButtonWithBadge count={yesCount}>Да</ButtonWithBadge>
    <ButtonWithBadge count={noCount}>Нет</ButtonWithBadge>
  </div>
)

YesOrNo.propTypes = {
  yesCount: PropTypes.number.isRequired,
  noCount: PropTypes.number.isRequired
}

export default YesOrNo
