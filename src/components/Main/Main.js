import React from 'react'
import Sidebar from '../Sidebar'
import Content from '../Content'
import CompareButton from '../CompareButton'

class Main extends React.Component {
  render() {
    return (
      <div className="g-main">
        <div
          className="b-crumbs"
          id="status-line"
          itemScope
          itemType="http://schema.org/BreadcrumbList"
        >
          <span
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a className="crumbs_item" href="../index.html" itemProp="item">
              <span itemProp="name">Компьютерная техника</span>
            </a>
            <meta itemProp="position" content={1} />
          </span>
          <span
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span className="crumbs_current" itemProp="name">
              Каталог видеокарт
            </span>
            <meta itemProp="position" content={2} />
          </span>
        </div>
        <link
          rel="stylesheet"
          href="https://1k.by/OS/bxslider/css/jquery.bxslider.css"
        />
        <link rel="stylesheet" href="https://1k.by/OS/slick/css/slick.css" />
        <section className="col2">
          <section className="pageDescription">
            <div className="b-page-ttl">
              <h1>Видеокарты</h1>
            </div>
          </section>
          <Sidebar />
          <Content />
          <CompareButton />
        </section>{" "}
      </div>
    )
  }
}

export default Main
