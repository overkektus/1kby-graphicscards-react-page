import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="g-header">
        <a className="b-logo" href="https://1k.by/">
          <img
            className="logo_pic logo_pic-by"
            src="https://1k.by/Templates/standard/images/b-logo_img_by.png"
          />
        </a>
        {}
        <div className="b-menu">
          <div className="menu_catalog">
            <div className="menu_catalog-txt">Каталог товаров</div>
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
          </div>
          <div className="menu_misc">
            <div
              className="menu_misc-item pda"
              data-url="https://1k.by/changesiteversion-mobi?referer=https%3A%2F%2Fkomp.1k.by%2Futility-graphicscards%2F"
              title="\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F"
            >
              <span className="menu_misc-ttl">Мобильная версия</span>
            </div>
          </div>
          <ul className="menu_nav">
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
        </div>
        {}
        <form
          className="b-search"
          id="search"
          action="https://1k.by/products/search"
          method="get"
        >
          <div className="search_inner">
            <label className="search_dir">
              <span className="search_dir-text">Каталог товаров</span>
              <select id="searchFor" className="search_dirs" name="searchFor">
                <option value="products" selected="selected">
                  Каталог товаров
                </option>
                <option value="news">Новости</option>
                <option value="reviews">Обзоры</option>
                <option value="sites">Каталог сайтов</option>
                <option value="forum">Форум</option>
              </select>
            </label>
            <label className="search_field">
              <input
                className="search_input ui-autocomplete-input"
                type="text"
                name="s_keywords"
                id="s_keywords"
                defaultValue
                autoComplete="off"
              />
              <span className="search_holder">Поиск по сайту</span>
            </label>
            <input
              className="search_submit"
              type="submit"
              defaultValue="\u041D\u0430\u0439\u0442\u0438"
              id="s_submit"
            />
            <input
              type="hidden"
              id="s_categoryid"
              name="s_categoryid"
              defaultValue={0}
            />
            <div id="searchautocomplete" className="searchautocomplete content">
              <ul
                className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
                id="ui-id-1"
                tabIndex={0}
                style={{
                  display: "none"
                }}
              />
            </div>
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
        <div className="b-auth login">
          <a className="auth_item" href="https://1k.by/users/auth">
            Войти
          </a>
          <a className="auth_item" href="https://1k.by/users/register">
            Зарегистрироваться
          </a>
          <div className="auth_social">
            <a
              className="auth_vk"
              href="https://1k.by/users/auth-social?provider=vkontakte"
            />
            <a
              className="auth_tw"
              href="https://1k.by/users/auth-social?provider=twitter"
            />
            <a
              className="auth_fb"
              href="https://1k.by/users/auth-social?provider=facebook"
            />
          </div>
        </div>
        {}{" "}
      </div>
    );
  }
}

export default Header;
