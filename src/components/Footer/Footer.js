import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="g-footer">
        <div className="g-footer_data">
          <div className="b-site-map">
            <div className="site-map_col">
              <div className="site-map_title">Первый Каталог</div>
              <ul className="site-map_list">
                <li className="site-map_item">
                  <a href="https://1k.by/info1k/sitemap">Карта сайта</a>
                </li>
                <li className="site-map_item">
                  <a href="https://1k.by/vendors/">Производители</a>
                </li>
                <li className="site-map_item">
                  <a href="https://1k.by/info1k/copyright">
                    Копирайт и авторские права
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://users.1k.by/info-agreement">
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://1k.by/users/registerseller">
                    Регистрация магазина
                  </a>
                </li>
              </ul>
            </div>
            <div className="site-map_col">
              <div className="site-map_title">Популярные категории</div>
              <ul className="site-map_list">
                <li className="site-map_item">
                  <a href="../mobile-notebooks/index.html">Ноутбуки</a>
                </li>
                <li className="site-map_item">
                  <a href="../mobile-pctablets/index.html">Планшеты</a>
                </li>
                <li className="site-map_item">
                  <a href="https://phone.1k.by/mobile/">Мобильные телефоны</a>
                </li>
                <li className="site-map_item">
                  <a href="https://digital.1k.by/video-tvpanels/">Телевизоры</a>
                </li>
                <li className="site-map_item">
                  <a href="https://digital.1k.by/photo-digitalcameras/">
                    Цифровые фотоаппараты
                  </a>
                </li>
              </ul>
            </div>
            <div className="site-map_col">
              <div className="site-map_title">Новые категории</div>
              <ul className="site-map_list">
                <li className="site-map_item">
                  <a href="https://sport.1k.by/sportingequipment-trackingsticks/">
                    Палки для трекинга и скандинавской ходьбы
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://kids.1k.by/babyfurniture-basketsfortoys/">
                    Ящики и корзины для игрушек
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://remont.1k.by/bathroomequipment-siphon/">
                    Сифоны
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://remont.1k.by/bathroomequipment-flushingsystems/">
                    Клавиши и системы смыва
                  </a>
                </li>
                <li className="site-map_item">
                  <a href="https://digital.1k.by/musicalinstruments-acousticguitars/">
                    Акустические гитары
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {}
          <div className="b-site-nav">
            <a className="site-nav_item" href="https://1k.by/info1k/about">
              О нас
            </a>
            <a className="site-nav_item" href="https://1k.by/info1k/ads">
              Реклама
            </a>
            <a className="site-nav_item" href="https://users.1k.by/info-buyer">
              Покупателям
            </a>
            <a className="site-nav_item" href="https://users.1k.by/info-seller">
              Продавцам
            </a>
            <a className="site-nav_item" href="https://1k.by/info1k/contacts">
              Обратная связь
            </a>
            <a className="site-nav_item" href="https://1k.by/info1k/discount/">
              Скидки и акции на 1K.BY!
            </a>
          </div>
          {}
        </div>
        <div className="g-footer_social">
          <div className="b-copyrights">
            © 2007-2018 "Первый Каталог" Беларусь, Минск
            <br />
            <br />
          </div>
          {}
          <div className="b-counter">
            {}
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
