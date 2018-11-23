import React from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'store'
import { readGraphicscards, changeView } from 'ducks/graphicscards'
import { Select, Pagination, BackTop } from 'antd'
import ProductList from 'components/ProductList';
import ButtonsViews from './ButtonsViews'
import Manufacturers from './Manufacturers'
import './Content.css'

const { Option } = Select

class Content extends React.Component {
  componentWillMount() {
    dispatch(readGraphicscards())
  }

  changeViewHandler = (viewType) => {
    dispatch(changeView(viewType))
  }

  onPaginationChange = (event) => {

  }

  render() {
    return (
      <main className='content'>
        <section className='filter filter--custom'>
          <section className='filterRow filter-row--custom'>
            <div>Сортировать по</div>
            <Select defaultValue='titleasc' className='select select_orig'>
              <Option value='titleasc'>названию А-Я</Option>
              <Option value='titledesc'>названию Я-А</Option>
              <Option value='top'>популярности</Option>
              <Option value='priceasc'>розничной цене начать с дешевых</Option>
              <Option value='pricedesc'>розничной цене начать с дорогих</Option>
              <Option value='pricecashlessasc'>безналичной цене начать с дешевых</Option>
              <Option value='pricecashlessdesc'>безналичной цене начать с дорогих</Option>
            </Select>
          </section>
          <ButtonsViews/>
        </section>
        <section className='items'>
          <ProductList />
          <Manufacturers />
          <div
            className='checkboxCompareMain'
            id='compareproducts_link'
            data-categoryid={419}
            style={{
              display: 'none'
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
        <BackTop
          style={{
            right: '10px',
            bottom: '80px'
          }}
        />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    graphicscards: state.graphicscards.data,
    viewType: state.graphicscards.viewType
  }
}

export default connect(mapStateToProps)(Content)
