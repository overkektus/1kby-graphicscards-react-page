import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from 'components/Product'
import ProductCard from 'components/ProductCard'
import ProductListItem from 'components/ProductListItem'

class ProductList extends Component {
  render() {
    const { viewType, graphicscards } = this.props
    if(viewType === 'table') {
      return(
        graphicscards.map(card => (
          <ProductCard
            name={card.name}
            imgUrl={card.imgUrl}
            minCashPrice={card.minCashPrice}
            minCashlessPrice={card.minCashlessPrice}
          />
        ))
      )
    } else if(viewType === 'list') {
      return(
        graphicscards.map(card => (
          <ProductListItem
            name={card.name}
            imgUrl={card.imgUrl}
            minCashPrice={card.minCashPrice}
            maxCashPrice={card.maxCashPrice}
            minCashlessPrice={card.minCashlessPrice}
            maxCashlessPrice={card.maxCashlessPrice}
          />
        ))
      )
    } else {
      return(
        graphicscards.map(card => (
          <Product
            name={card.name}
            imgUrl={card.imgUrl}
            minCashPrice={card.minCashPrice}
            maxCashPrice={card.maxCashPrice}
            minCashlessPrice={card.minCashlessPrice}
            maxCashlessPrice={card.maxCashlessPrice}
          />
        ))
      )
    }
  }
}

const mapStateToProps = (state) => ({
  graphicscards: state.graphicscards.data,
  viewType: state.graphicscards.viewType
})

export default connect(mapStateToProps)(ProductList)
