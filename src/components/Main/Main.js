import React from 'react'
import { Breadcrumb } from 'antd'
import Sidebar from '../Sidebar'
import Content from '../Content'
import CompareButton from '../CompareButton'

const { Item: BreadcrumbItem } = Breadcrumb

class Main extends React.Component {
  render() {
    return (
      <div className="g-main">
        <section style={{
          padding: '10px 0'
        }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="https://komp.1k.by/">Компьютерная техника</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              Каталог видеокарт
            </BreadcrumbItem>
          </Breadcrumb>
        </section>
        <section className="col2">
          <section className="pageDescription">
            <div className="b-page-ttl">
              <h1>Видеокарты</h1>
            </div>
          </section>
          <Sidebar />
          <Content />
          <CompareButton />
        </section>
      </div>
    )
  }
}

export default Main
