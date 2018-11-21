import React from 'react'
import { Dropdown } from 'antd'
import { Menu, Select, AutoComplete, Button, Icon } from 'antd'
import vkIcon from './vk-logo.svg'
import twitterIcon from './twitter-logo.svg'
import facebookIcon from './facebook-logo.svg'

const { Item } = Menu
const { Option } = Select

const CatalogDropdown = (
  <div className="menu_catalog-drop">
    <ul className="menu_catalog-list">
      <li className="menu_catalog-item">
        <a href="../index.html">
          Компьютерная техника{" "}
          <i className="menu_catalog-icon icon_komp" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://digital.1k.by/">
          Видео, аудио, фото, оптика{" "}
          <i className="menu_catalog-icon icon_digital" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://phone.1k.by/">
          Телефония и связь{" "}
          <i className="menu_catalog-icon icon_phone" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://kids.1k.by/">
          Детский мир <i className="menu_catalog-icon icon_kids" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://home.1k.by/">
          Бытовая техника{" "}
          <i className="menu_catalog-icon icon_home" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://sport.1k.by/">
          Спорт и туризм{" "}
          <i className="menu_catalog-icon icon_sport" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://remont.1k.by/">
          Строительство и ремонт{" "}
          <i className="menu_catalog-icon icon_remont" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://auto.1k.by/">
          Все для авто <i className="menu_catalog-icon icon_auto" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://dom.1k.by/">
          Все для дома и дачи{" "}
          <i className="menu_catalog-icon icon_dom" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://health.1k.by/">
          Красота и здоровье{" "}
          <i className="menu_catalog-icon icon_health" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://gift.1k.by/">
          Подарки и аксессуары{" "}
          <i className="menu_catalog-icon icon_gift" />
        </a>
      </li>
      <li className="menu_catalog-item">
        <a href="https://soft.1k.by/">
          Софт, фильмы, музыка{" "}
          <i className="menu_catalog-icon icon_soft" />
        </a>
      </li>
    </ul>
  </div>
)

class Header extends React.Component {
  render() {
    return (
      <div className="g-header">
        <a className="b-logo" href="https://1k.by/">
          <img
            className="logo_pic logo_pic-by"
            src="https://1k.by/Templates/standard/images/b-logo_img_by.png"
            alt="logo"
          />
        </a>
        {}
        <div
          className="b-menu"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            className="menu_catalog"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Dropdown overlay={CatalogDropdown} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                Каталог товаров
              </a>
            </Dropdown>
          </div>
          <ul
            className="menu_nav"
            style={{
              display: 'flex',
              flexGrow: '2'
            }}
          >
            <li className="menu_nav-item">
              <a href="https://news.1k.by/">Новости</a>
            </li>
            <li className="menu_nav-item">
              <a href="https://review.1k.by/">Обзоры</a>
            </li>
            <li className="menu_nav-item">
              <a href="https://list.1k.by/">Каталог сайтов</a>
            </li>
          </ul>
          <div className="menu_misc">
            <div
              className="menu_misc-item pda"
              data-url="https://1k.by/changesiteversion-mobi?referer=https%3A%2F%2Fkomp.1k.by%2Futility-graphicscards%2F"
              title="\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F"
            >
              <span className="menu_misc-ttl">Мобильная версия</span>
            </div>
          </div>
        </div>
        {}
        <form
          className="b-search"
          id="search"
          action="https://1k.by/products/search"
          method="get"
        >
          <div className="search_inner" style={{
            display: "flex",
            alignItems: "center",
            padding: 0
          }}>
            <AutoComplete/>
            <Select
              style={{
                width: '195px'
              }}
              placeholder="Каталог товаров"
            >
              <Option value="goodsCatalog">Каталог товаров</Option>
              <Option value="news">Новости</Option>
              <Option value="reviews">Обзоры</Option>
              <Option value="sitesCatalog">Каталог сайтов</Option>
              <Option value="forum">Форум</Option>
            </Select>
            <Button size="large">
              Найти
            </Button>
          </div>
          <div className="search_details">
            <div className="search_conf">Регион: Беларусь </div>
            <div className="search_conf">Цены в: б.р. </div>
            <div className="search_drop">
              <div className="search_conf">Доставка: любая </div>
              <a
                className="b-btn btn_small btn_light"
                href="https://users.1k.by/setgeo"
              >
                Изменить
              </a>
            </div>
          </div>
        </form>
        {}
        <div className="b-auth login" style={{height: 'auto'}}>
          <a className="auth_item" href="https://1k.by/users/auth">
            Войти
          </a>
          <a className="auth_item" href="https://1k.by/users/register">
            Зарегистрироваться
          </a>
          <div className="auth_social">
            <img src={vkIcon} alt="vk logo"/>
            <img src={twitterIcon} alt="twitter logo"/>
            <img src={facebookIcon} alt="fcebook logo"/>
          </div>
        </div>
        {}{" "}
      </div>
    )
  }
}

export default Header
