import React from 'react'
import { connect } from 'react-redux'
import { Select, Icon, Pagination } from 'antd'
import Product from 'components/Product'
import Manufacturers from './Manufacturers'
import { dispatch } from 'store'
import { readGraphicscards } from 'ducks/graphicscards'

const { Option } = Select

class Content extends React.Component {
  componentWillMount(){
    dispatch(readGraphicscards())
  }

  onPaginationChange = () => {

  }

  render() {
    const { graphicscards } = this.props
    const graphicscardsToRender = graphicscards.map(card => (
      <Product
        name={card.name}
        imgUrl={card.imgUrl}
        minCashPrice={card.minCashPrice}
        maxCashPrice={card.maxCashPrice}
        minCashlessPrice={card.minCashlessPrice}
        maxCashlessPrice={card.maxCashlessPrice}
      />
    ))
    return (
      <main className="content">
        <section
          className="filter"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <section
            className="filterRow"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '240px'
            }}
          >
            <div>Сортировать по</div>
            <Select defaultValue="titleasc" className="select select_orig">
              <Option value="titleasc">названию А-Я</Option>
              <Option value="titledesc">названию Я-А</Option>
              <Option value="top">популярности</Option>
              <Option value="priceasc">розничной цене начать с дешевых</Option>
              <Option value="pricedesc">розничной цене начать с дорогих</Option>
              <Option value="pricecashlessasc">безналичной цене начать с дешевых</Option>
              <Option value="pricecashlessdesc">безналичной цене начать с дорогих</Option>
            </Select>
          </section>
          <section
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <span>Вид</span>
            <ul
              style={{
                display: 'flex'
              }}
            >
              <li>
                <Icon
                  type="bars"
                  style={{fontSize: '3.5em', color: '#0099FF'}}
                />
              </li>
              <li>
                <Icon
                  type="appstore"
                  style={{fontSize: '3.3em', color: '#C5D5E3'}}
                />
              </li>
              <li>
                <Icon
                  type="table"
                  style={{fontSize: '3.4em', color: '#C5D5E3'}}
                />
              </li>
            </ul>
          </section>
        </section>
        <section className="items">
          {graphicscardsToRender}
          <Manufacturers />
          <div
            className="checkboxCompareMain"
            id="compareproducts_link"
            data-categoryid={419}
            style={{
              display: "none"
            }}
          >
            выберите минимум 2 товара
          </div>
        </section>
        <section style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onPaginationChange} />
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    graphicscards: state.graphicscards.data
  }
}

export default connect(mapStateToProps)(Content)
