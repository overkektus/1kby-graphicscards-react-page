import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    const {
      name, imgUrl, minCashPrice, maxCashPrice,
      minCashlessPrice, maxCashlessPrice } = this.props
    return (
      <section
        className="item-box active product_block"
        data-productid={2594669}
      >
        <section className="item-toggle">
          <section className="title-icon" />
          <section className="item-title-toggle">
            Видеокарта ASUS GeForce GTX 1060 1506Mhz PCI-E 3.0 6144Mb 8008Mhz
            192 bit DVI 2xHDMI HDCP
          </section>
        </section>
        <section className="item-section">
          <section className="item-image-box">
            <a
              id="image_container_2594669"
              href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669.html"
            >
              <span
                className="colorbox_group_2594669"
              >
                <img
                  title="ASUS GeForce GTX 1060 1506Mhz PCI-E 3.0 6144Mb 8008Mhz 192 bit DVI 2xHDMI HDCP"
                  alt="ASUS GeForce GTX 1060 1506Mhz PCI-E 3.0 6144Mb 8008Mhz 192 bit DVI 2xHDMI HDCP"
                  src={imgUrl}
                />{" "}
              </span>
            </a>
            <span className="close-button" />
            <div className="b-compare">
              <label className="checkboxCompare">
                <input
                  className="checkbox cbx_inp"
                  name="compareproductsids"
                  defaultValue={1}
                  type="checkbox"
                />
                <i />
                <span className="cbx_txt">Сравнить</span>
              </label>
            </div>
            <div className="enlarge_image" id="enlarge_image_2594669">
              <span
                className="zoom"
                title="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C"
              />
            </div>
          </section>
          <section className="item-description-box">
            <div className="item-title">
              <a href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669.html">
                {name}
              </a>
            </div>
            <div className="item-info">
              <p>
                PCI-E (3.0), процессор: NVIDIA GeForce GTX 1060 (1506 МГц),
                память: GDDR5, 6144 Мб, 8008 МГц, 192 бит, HDMI, displayPort,
                directX 12
              </p>
              <ul className="sub-items-menu">
                <li>
                  <a href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669/offers/index.html">
                    где купить? <span>9</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="item-price-box">
            <p>
              Розница{" "}
              <a href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669/offers/index.html">
                {minCashPrice} – {maxCashPrice}
              </a>{" "}
              б.р.
            </p>
            <p>
              Безнал{" "}
              <a
                href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669/beznal/index.html"
                className="cash"
              >
                {minCashlessPrice} – {maxCashlessPrice}
              </a>{" "}
              б.р.
            </p>
            <div className="item-compare-price">
              <a href="asus/ASUS_GeForce_GTX_1060_1506Mhz_PCI_E_30_6144Mb_8008Mhz_192_bit_DVI_2xHDMI_HDCP-2594669/offers/index.html">
                Сравнить все цены
              </a>
            </div>
          </section>
        </section>
      </section>
    )
  }
}

Product.proptypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  minCashPrice: PropTypes.number.isRequired,
  maxCashPrice: PropTypes.number.isRequired,
  minCashlessPrice: PropTypes.number.isRequired,
  maxCashlessPrice: PropTypes.number.isRequired
}

export default Product
