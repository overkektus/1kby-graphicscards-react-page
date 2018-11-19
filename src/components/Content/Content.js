import React from 'react'
import { connect } from 'react-redux'
import Product from 'components/Product'
import Manufacturers from './Manufacturers'
import { dispatch } from 'store'
import { readGraphicscards } from 'ducks/graphicscards'

class Content extends React.Component {
  componentWillMount(){
    dispatch(readGraphicscards())
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
        <section className="filter">
          <section className="filterRow">
            <div>Сортировать по</div>
            <select
              id="f2778003"
              className="select select_orig"
              name="order"
              onfocus="this.style.color='#333333';"
              onblur="this.style.color='#333333';"
            >
              <option defaultValue="titleasc">названию А-Я</option>
              <option defaultValue="titledesc">названию Я-А</option>
              <option value="selected" defaultValue="top">
                популярности
              </option>
              <option defaultValue="priceasc">розничной цене начать с дешевых</option>
              <option defaultValue="pricedesc">розничной цене начать с дорогих</option>
              <option defaultValue="pricecashlessasc">
                безналичной цене начать с дешевых
              </option>
              <option defaultValue="pricecashlessdesc">
                безналичной цене начать с дорогих
              </option>
            </select>{" "}
          </section>
          <section className="view">
            <span>Вид</span>
            <ul>
              <li>
                <span
                  className="st1 active"
                />
              </li>
              <li>
                <span
                  className="st2"
                />
              </li>
              <li>
                <span
                  className="st3"
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
        <section className="pagination">
          <ul>
            <li>
              <span className="active">1</span>
            </li>
            <li>
              <a href="page2.html">2</a>
            </li>
            <li>
              <a href="page3.html">3</a>
            </li>
            <li>
              <a href="page4.html">4</a>
            </li>
            <li>
              <a href="page5.html">5</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a href="page23.html">23</a>{" "}
            </li>
            <li>
              <a href="page2.html" className="rightButton">

              </a>{" "}
            </li>
          </ul>
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
