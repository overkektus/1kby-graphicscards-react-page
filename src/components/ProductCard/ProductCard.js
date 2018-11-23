import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Checkbox } from 'antd'

const { Meta } = Card

class ProductCard extends Component {
  render() {
    const { name, imgUrl, minCashPrice, minCashlessPrice } = this.props
    return(
      <Card
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Checkbox
              style={{
                marginRight: '10px'
              }}
            />
            <h1
              style={{
                margin: '0'
              }}
            >{name}</h1>
          </div>
        }
        style={{
          width: 350
        }}
        cover={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <img
              src={imgUrl}
              alt={name}
              style={{
                width: '175px'
              }}
            />
          </div>
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <p>
            Розница от
            <a>{minCashPrice}</a>
            б.р.
          </p>
          <p>
            Безнал от
            <a>{minCashlessPrice}</a>
            б.р.
          </p>
        </div>
      </Card>
    );
  }
}

ProductCard.proptypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  minCashlessPrice: PropTypes.number.isRequired,
  maxCashlessPrice: PropTypes.number.isRequired
}

export default ProductCard;
