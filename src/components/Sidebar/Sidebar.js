import React from 'react'
import { List } from 'antd'
import Form from './Form'

const popularManufacturers = [
  'ASUS',
  'GigaByte',
  'MSI',
  'Palit',
  'Sapphire',
  'Inno3D',
  'ZOTAC',
  'PNY',
  'Gainward',
  'PowerColor',
  'EVGA'
]

const reviews = [
  'Как выбрать видеокарту?',
  'Обзор видеокарты Nvidia GeForce GTX 295',
  'GeForce GTX 260/280 против',
  'Radeon HD 4850/4870 обзор видеокарт'
]

const inNews = [
  'AMD представила видеокарту Radeon RX 590',
  'Apple начала устанавливать в MacBook Pro новые видеокарты AMD Vega',
  'Nvidia представила профессиональную видеокарту Quadro RTX 4000'
]

const reviewsGraphicscards = [
  'Отзыв о ASUS Radeon RX 460 1200Mhz PCI-E 3.0 2048Mb 7000Mhz 128 bit DVI HDMI HDCP',
  'Отзыв о Palit GeForce GTX 760 1072Mhz PCI-E 3.0 2048Mb 6200Mhz 256 bit 2xDVI HDMI HDCP',
  'Отзыв о ASUS Radeon R7 240 730Mhz PCI-E 3.0 2048Mb 1800Mhz 128 bit DVI HDMI HDCP'
]

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="left" style={{ flex: '0 0 272px' }}>
        <Form />
        <div className="topArticle">
          <div className="box_body box_body_sidebar">
            <ul className="b-links top">
              <li className="links_item">
                <a href="another/index.html">Товары не вошедшие в каталог</a>
              </li>
              <li className="links_item">
                <a href="../utility-graphicscards-terms/index.html">
                  Словарь терминов
                </a>
              </li>
              <li className="links_item">
                <a href="all-list/index.html">Список актуальных моделей</a>
              </li>
            </ul>
            <div className="b-topics">
              <List
                size="small"
                header={<h4 className="topics_title">Популярные производители:</h4>}
                dataSource={popularManufacturers}
                renderItem={item => (<List.Item><a>{item}</a></List.Item>)}
              />
              <List
                size="small"
                header={<h4 className="topics_title">Обзоры:</h4>}
                dataSource={reviews}
                renderItem={item => (<List.Item><a>{item}</a></List.Item>)}
              />
              <List
                size="small"
                header={<h4 className="topics_title">В новостях:</h4>}
                dataSource={inNews}
                renderItem={item => (<List.Item><a>{item}</a></List.Item>)}
              />
              <List
                size="small"
                header={<h4 className="topics_title">Отзывы на видеокарты:</h4>}
                dataSource={reviewsGraphicscards}
                renderItem={item => (<List.Item><a>{item}</a></List.Item>)}
              />
            </div>
          </div>
        </div>
      </aside>
    )
  }
}


export default Sidebar
