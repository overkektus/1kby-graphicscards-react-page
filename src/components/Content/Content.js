import React from 'react'
import Product from 'components/Product'
import Manufacturers from './Manufacturers'

class Content extends React.Component {
  render() {
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
              <option value="titleasc">названию А-Я</option>
              <option value="titledesc">названию Я-А</option>
              <option selected="selected" value="top">
                популярности
              </option>
              <option value="priceasc">розничной цене начать с дешевых</option>
              <option value="pricedesc">розничной цене начать с дорогих</option>
              <option value="pricecashlessasc">
                безналичной цене начать с дешевых
              </option>
              <option value="pricecashlessdesc">
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
          <Product />
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

export default Content
