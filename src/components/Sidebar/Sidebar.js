import React from 'react'
import { Collapse, Button, Input, InputNumber, Badge } from 'antd'

const { Panel } = Collapse

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="left">
        <section className="search">
          <form
            className="b-ver-filter"
            action="https://komp.1k.by/utility-graphicscards/s.php"
            method="get"
            id="formchoice"
          >
            <section id="parameters-box">
              <Collapse defaultActiveKey={['1', '2']} >
                <Panel key="1" header="Поиск по названию">
                  <Input/>
                </Panel>
                <Panel key="2" header="Цена, б.р.">
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div style={{ display: 'flex' }}>
                      <p style={{ margin: '0'}}>от</p>
                      <InputNumber/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                      <p style={{ margin: '0'}}>до</p>
                      <InputNumber/>
                    </div>
                  </div>
                </Panel>
                <Panel key="3" header="Показывать товары">
                  <fieldset
                    className="ver-filter_row select"
                    data-parameterid="filter"
                  >
                    <div className="ver-filter_box">
                      <span id="b_sp_filter">
                        <select
                          id="ff75946e"
                          className="select select_orig"
                          style={{
                            width: "100%"
                          }}
                          name="filter"
                          onFocus="this.style.color='#333333';"
                          onBlur="this.style.color='#333333';"
                        >
                          <option defaultValue="retail">в розничной продаже</option>
                          <option defaultValue="cashless">в безналичной продаже</option>
                          <option value="selected" defaultValue="actual">
                            актуальные
                          </option>
                          <option defaultValue="all">все</option>
                        </select>
                      </span>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="4" header="Производители">
                  <fieldset
                    className="ver-filter_row checkBoxImage ver-filter_2col"
                    data-parameterid="producers"
                  >
                    <div className="ver-filter_ttl">
                      <span className="ver-filter_name">
                        <span className="dot">Производители</span>
                      </span>
                    </div>
                    <div className="b-drops">
                      <div className="drops_main" id="b-producers">
                        <div className="drops_view">
                          <label className="b-cbx">
                            <input
                              id="fa41a0e0"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={47}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v809afa83b.jpg" alt="ASUS logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={47}>
                              ASUS <sup className="cbx_sup facet_cnt">104</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="fcf147ef"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={56}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/vc422b294e.jpg" alt="GigaByte logo" />
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={56}>
                              GigaByte <sup className="cbx_sup facet_cnt">97</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f8fb0b44"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={1050}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v1a6ada1a5.png" alt="MSI logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={1050}>
                              MSI <sup className="cbx_sup facet_cnt">101</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="fab0d8f6"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={193}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v161968a4f.jpg" alt="Palit logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={193}>
                              Palit <sup className="cbx_sup facet_cnt">59</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f3adc289"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={1044}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v57efb233c.png" alt="Inno3D logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={1044}>
                              Inno3D <sup className="cbx_sup facet_cnt">42</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="fc9f2432"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={197}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v74e439030.gif" alt="Sapphire logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={197}>
                              Sapphire <sup className="cbx_sup facet_cnt">44</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f4b9719d"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={202}
                            />
                            <i className="i-16">ZOTAC</i>
                            <span className="cbx_txt" data-producerdefaultValueid={202}>
                              ZOTAC <sup className="cbx_sup facet_cnt">23</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f0ff84f2"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={192}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v880021ad9.gif" alt="PNY logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={192}>
                              PNY <sup className="cbx_sup facet_cnt">28</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f0578845"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={185}
                            />
                            <i>
                              <img src="https://1k.by/images/site/productsproducers/v98bca253d.jpg" alt="Gainward logo"/>
                            </i>
                            <span className="cbx_txt" data-producerdefaultValueid={185}>
                              Gainward <sup className="cbx_sup facet_cnt">10</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f861a4d9"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={195}
                            />
                            <i className="i-13">PowerColor</i>
                            <span className="cbx_txt" data-producerdefaultValueid={195}>
                              PowerColor <sup className="cbx_sup facet_cnt">16</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="f4fb5a0f"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={182}
                            />
                            <i className="i-16">EVGA</i>
                            <span className="cbx_txt" data-producerdefaultValueid={182}>
                              EVGA <sup className="cbx_sup facet_cnt">18</sup>
                            </span>
                          </label>
                          <label className="b-cbx">
                            <input
                              id="fe2053ac"
                              className="checkbox cbx_inp"
                              type="checkbox"
                              name="producers[]"
                              defaultValue={3140}
                            />
                            <i className="i-16">Matrox</i>
                            <span className="cbx_txt" data-producerdefaultValueid={3140}>
                              Matrox <sup className="cbx_sup facet_cnt">5</sup>
                            </span>
                          </label>
                        </div>
                        <span className="drops_show">Все производители</span>
                      </div>
                      <div className="drops_pop">
                        <div className="drops_in">
                          <div className="b-fld">
                            <label className="fld_inn">
                              <input
                                id="searchProducers"
                                className="fld_inp"
                                type="text"
                                name="searchProducers"
                                size={50}
                                maxLength={255}
                                onFocus="this.style.color='#333333';"
                                onBlur="this.style.color='#333333';"
                              />
                            </label>
                          </div>
                          <div className="drops_list" id="b-fullproducers">
                            <label className="b-cbx">
                              <input
                                id="f68be458"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={5598}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={5598}>
                                AFOX <sup className="cbx_sup facet_cnt">1</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="ff32032c"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={1661}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={1661}>
                                AMD <sup className="cbx_sup facet_cnt">1</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fba72987"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={47}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={47}>
                                ASUS <sup className="cbx_sup facet_cnt">104</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fb671fd5"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={182}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={182}>
                                EVGA <sup className="cbx_sup facet_cnt">18</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f53d12e2"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={185}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={185}>
                                Gainward <sup className="cbx_sup facet_cnt">10</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f007fc7f"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={56}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={56}>
                                GigaByte <sup className="cbx_sup facet_cnt">97</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fddde348"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={1122}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={1122}>
                                HP <sup className="cbx_sup facet_cnt">3</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f8fcebe3"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={1044}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={1044}>
                                Inno3D <sup className="cbx_sup facet_cnt">42</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f404eb68"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={6517}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={6517}>
                                KFA2 <sup className="cbx_sup facet_cnt">8</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f8efa9dd"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={3140}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={3140}>
                                Matrox <sup className="cbx_sup facet_cnt">5</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fba8ce1e"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={1050}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={1050}>
                                MSI <sup className="cbx_sup facet_cnt">101</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f612a9f9"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={6440}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={6440}>
                                Nvidia <sup className="cbx_sup facet_cnt">4</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fafe017e"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={193}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={193}>
                                Palit <sup className="cbx_sup facet_cnt">59</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fc78aa8c"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={192}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={192}>
                                PNY <sup className="cbx_sup facet_cnt">28</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f4f510c9"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={195}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={195}>
                                PowerColor{" "}
                                <sup className="cbx_sup facet_cnt">16</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="f50e3911"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={197}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={197}>
                                Sapphire <sup className="cbx_sup facet_cnt">44</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="ffbdb57f"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={12891}
                              />{" "}
                              <i />
                              <span
                                className="cbx_txt"
                                data-producerdefaultValueid={12891}
                              >
                                Sinotex Ninja{" "}
                                <sup className="cbx_sup facet_cnt">1</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="ff5c52d6"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={200}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={200}>
                                XFX <sup className="cbx_sup facet_cnt">2</sup>
                              </span>
                            </label>
                            <label className="b-cbx">
                              <input
                                id="fb9ec95b"
                                className="checkbox cbx_inp"
                                type="checkbox"
                                name="fullproducers[]"
                                defaultValue={202}
                              />{" "}
                              <i />
                              <span className="cbx_txt" data-producerdefaultValueid={202}>
                                ZOTAC <sup className="cbx_sup facet_cnt">23</sup>
                              </span>
                            </label>
                            <div className="drops_col" />
                            <div className="drops_col" />
                            <div className="drops_col" />
                            <div className="drops_col" />
                          </div>
                          <span className="drops_hide">Скрыть</span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="5" header="Тип видеокарты">
                  <Button
                    style={{

                    }}
                  >
                    Игровая
                    <Badge count={4}
                      style={{
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                        position:'relative',
                        top: '-5px'
                      }} />
                  </Button>
                </Panel>
                <Panel key="6">
                  <fieldset
                    className="ver-filter_row checkSquare"
                    data-parameterid={4187}
                  >
                    <div className="ver-filter_ttl">
                      <span className="ver-filter_name">
                        <span className="dot">Название видеопроцессора</span>
                      </span>
                      <span
                        className="b-tip"
                        title="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430"
                        data-name="tip"
                        data-parameterid={4187}
                      />
                    </div>
                    <div className="ver-filter_box box-scrollable">
                      <div id="b_sp_4187">
                        <label className="b-cbx">
                          <input
                            id="f7d6d8e8"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1337669}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1337669}>
                            NVIDIA GeForce GTX 1050{" "}
                            <sup className="cbx_sup facet_cnt">30</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f0bec5cc"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1337361}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1337361}>
                            NVIDIA GeForce GTX 1050 Ti{" "}
                            <sup className="cbx_sup facet_cnt">40</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f2fc3b36"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={944555}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={944555}>
                            NVIDIA GeForce GTX 1060{" "}
                            <sup className="cbx_sup facet_cnt">73</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fc8c9c51"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={887965}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={887965}>
                            NVIDIA GeForce GTX 1070{" "}
                            <sup className="cbx_sup facet_cnt">50</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="ff7a39af"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1447149}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1447149}>
                            NVIDIA GeForce GTX 1070 Ti{" "}
                            <sup className="cbx_sup facet_cnt">23</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f3c52757"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={874307}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={874307}>
                            NVIDIA GeForce GTX 1080{" "}
                            <sup className="cbx_sup facet_cnt">35</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f4e4ae10"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1376863}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1376863}>
                            NVIDIA GeForce GTX 1080 Ti{" "}
                            <sup className="cbx_sup facet_cnt">37</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f1e241f3"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={469119}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={469119}>
                            NVIDIA GeForce GTX 750 Ti{" "}
                            <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f05ad8ee"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={633599}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={633599}>
                            NVIDIA GeForce GTX 960{" "}
                            <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f99a163a"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={576699}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={576699}>
                            NVIDIA GeForce GTX 970{" "}
                            <sup className="cbx_sup facet_cnt">2</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa95d62b"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={559459}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={559459}>
                            NVIDIA GeForce GTX 980{" "}
                            <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fd5355c2"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={493021}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={493021}>
                            AMD Radeon R5 230{" "}
                            <sup className="cbx_sup facet_cnt">7</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f307c5ec"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={424087}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={424087}>
                            AMD Radeon R7 240{" "}
                            <sup className="cbx_sup facet_cnt">7</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f88dfbe1"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={424085}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={424085}>
                            AMD Radeon R7 250{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f947e3e6"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={675097}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={675097}>
                            AMD Radeon R7 360 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f567fa4d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={673501}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={673501}>
                            AMD Radeon R7 370 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa6cadb1"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={424081}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={424081}>
                            AMD Radeon R9 270X <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fbd995ee"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={559461}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={559461}>
                            AMD Radeon R9 285 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f060bd76"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={673503}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={673503}>
                            AMD Radeon R9 380{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fe195788"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={973097}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={973097}>
                            AMD Radeon RX 460{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f3aa1165"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={973089}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={973089}>
                            AMD Radeon RX 470{" "}
                            <sup className="cbx_sup facet_cnt">13</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="ff3e568e"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={920891}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={920891}>
                            AMD Radeon RX 480{" "}
                            <sup className="cbx_sup facet_cnt">6</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f0e130eb"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={478121}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={478121}>
                            AMD FirePro S10000 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fcebd7cb"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={587097}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={587097}>
                            AMD FirePro S9150{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f0147949"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={576705}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={576705}>
                            AMD FirePro W2100 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fd0e8c4d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={576703}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={576703}>
                            AMD FirePro W4100 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f2ca4fbc"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391117}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391117}>
                            AMD Radeon RX 550{" "}
                            <sup className="cbx_sup facet_cnt">19</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fab84cf1"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1406387}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1406387}>
                            AMD Radeon RX 560{" "}
                            <sup className="cbx_sup facet_cnt">20</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa9d0402"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391129}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391129}>
                            AMD Radeon RX 570{" "}
                            <sup className="cbx_sup facet_cnt">20</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa8eb528"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391127}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391127}>
                            AMD Radeon RX 580{" "}
                            <sup className="cbx_sup facet_cnt">30</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f58111fa"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1439985}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1439985}>
                            AMD Radeon RX Vega 56{" "}
                            <sup className="cbx_sup facet_cnt">10</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f9bba6e9"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1426713}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1426713}>
                            AMD Radeon RX Vega 64{" "}
                            <sup className="cbx_sup facet_cnt">10</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f5ceb735"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1426727}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={1426727}>
                            AMD Radeon RX Vega 64 Liquid{" "}
                            <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f600637e"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={276833}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={276833}>
                            ATI Radeon HD 6450{" "}
                            <sup className="cbx_sup facet_cnt">2</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fe80717a"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={212506}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={212506}>
                            NVIDIA GeForce 210{" "}
                            <sup className="cbx_sup facet_cnt">6</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f38f5719"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1408771}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1408771}>
                            NVIDIA GeForce GT 1030{" "}
                            <sup className="cbx_sup facet_cnt">16</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fd89dda3"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={348638}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={348638}>
                            NVIDIA GeForce GT 630{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f0cf66f3"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={797089}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={797089}>
                            NVIDIA GeForce GT 710{" "}
                            <sup className="cbx_sup facet_cnt">27</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f7e63d2d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={535801}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={535801}>
                            NVIDIA GeForce GT 730{" "}
                            <sup className="cbx_sup facet_cnt">24</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f995abb6"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={502811}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={502811}>
                            NVIDIA GeForce GT 740{" "}
                            <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f4c5f0ca"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={395399}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={395399}>
                            NVIDIA GeForce GTX 770{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fe940e99"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1538509}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1538509}>
                            NVIDIA GeForce RTX 2070{" "}
                            <sup className="cbx_sup facet_cnt">3</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f1d5320f"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1520179}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1520179}>
                            NVIDIA GeForce RTX 2080{" "}
                            <sup className="cbx_sup facet_cnt">13</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f62057ba"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1520197}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1520197}>
                            NVIDIA GeForce RTX 2080 Ti{" "}
                            <sup className="cbx_sup facet_cnt">6</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f1400b3d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1497947}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1497947}>
                            NVIDIA P104-100{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fe27ed68"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={671113}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={671113}>
                            NVIDIA Quadro K1200{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f8e01049"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={557059}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={557059}>
                            NVIDIA Quadro K2200{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f363328a"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={557063}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={557063}>
                            NVIDIA Quadro K420{" "}
                            <sup className="cbx_sup facet_cnt">3</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f1cb9916"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={383495}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={383495}>
                            NVIDIA Quadro K600 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f439ba5e"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={557061}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={557061}>
                            NVIDIA Quadro K620{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fada75a5"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={879427}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={879427}>
                            NVIDIA Quadro M2000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f3966876"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={700315}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={700315}>
                            NVIDIA Quadro M4000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fc8af291"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={686797}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={686797}>
                            NVIDIA Quadro M6000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f6c45cbe"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={366873}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={366873}>
                            NVIDIA Quadro NVS 310{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa04b124"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={415053}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={415053}>
                            NVIDIA Quadro NVS 315{" "}
                            <sup className="cbx_sup facet_cnt">2</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fdf3e73e"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={376566}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={376566}>
                            NVIDIA Quadro NVS 510{" "}
                            <sup className="cbx_sup facet_cnt">2</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f3706c9e"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={879425}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={879425}>
                            NVIDIA Quadro NVS 810{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f7092e6d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391379}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391379}>
                            NVIDIA Quadro P1000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f2d3faca"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391559}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391559}>
                            NVIDIA Quadro P2000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f504ee76"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391385}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391385}>
                            NVIDIA Quadro P400{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f373369d"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391551}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391551}>
                            NVIDIA Quadro P4000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f3ae03c2"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391557}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391557}>
                            NVIDIA Quadro P5000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="ff9a0703"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391555}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391555}>
                            NVIDIA Quadro P600{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f9ac2159"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4187[]"
                            defaultValue={1391383}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={1391383}>
                            NVIDIA Quadro P6000{" "}
                            <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="7" header="Количество занимаемых слотов">
                  <fieldset
                    className="ver-filter_row checkBox collapsed"
                    data-parameterid={14164}
                  >
                    <div className="ver-filter_box">
                      <label className="b-cbx">
                        <input
                          id="f1777ef9"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_14164[]"
                          defaultValue={316997}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={316997}>
                          1 <sup className="cbx_sup facet_cnt">74</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="ff066af2"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_14164[]"
                          defaultValue={316998}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={316998}>
                          2 <sup className="cbx_sup facet_cnt">418</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f722c624"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_14164[]"
                          defaultValue={316999}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={316999}>
                          3 <sup className="cbx_sup facet_cnt">70</sup>
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="8" header="Тип памяти">
                  <fieldset
                    className="ver-filter_row checkBox collapsed"
                    data-parameterid={4197}
                  >
                    <div className="ver-filter_box">
                      <label className="b-cbx">
                        <input
                          id="fde18d7c"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={97721}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={97721}>
                          GDDR <sup className="cbx_sup facet_cnt">1</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="fb5d04f6"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={97720}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={97720}>
                          GDDR2 <sup className="cbx_sup facet_cnt">5</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f819e67b"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={97719}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={97719}>
                          GDDR3 <sup className="cbx_sup facet_cnt">74</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f375ca34"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={97722}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={97722}>
                          GDDR4 <sup className="cbx_sup facet_cnt">1</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f254cec8"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={119928}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={119928}>
                          GDDR5 <sup className="cbx_sup facet_cnt">369</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="ff070e06"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={874321}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={874321}>
                          GDDR5X <sup className="cbx_sup facet_cnt">75</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="fa3f203f"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={1520181}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={1520181}>
                          GDDR6 <sup className="cbx_sup facet_cnt">22</sup>
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f302ddb9"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={680107}
                        />{" "}
                        <span className="cbx_txt gray" data-defaultValueid={680107}>
                          HBM <sup className="cbx_sup facet_cnt" />
                        </span>
                      </label>
                      <label className="b-cbx">
                        <input
                          id="f7b8c363"
                          className="checkbox cbx_inp"
                          type="checkbox"
                          name="el_4197[]"
                          defaultValue={1426719}
                        />{" "}
                        <span className="cbx_txt" data-defaultValueid={1426719}>
                          HBM2 <sup className="cbx_sup facet_cnt">20</sup>
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="9" header="Объем памяти">
                  <fieldset
                    className="ver-filter_row select"
                    data-parameterid={4196}
                  >
                    <div className="ver-filter_box">
                      <div className="b-row row-cells-2">
                        <label className="row_note">Мб</label>
                        <div className="row_in">
                          <label className="row_cell">
                            <b className="row_cap">от</b>
                            <span className="row_el">
                              <select
                                id="from_el_4196"
                                className="row_sel"
                                name="from_el_4196"
                                onFocus="this.style.color='#333333';"
                                onBlur="this.style.color='#333333';"
                              >
                                <option value="selected" defaultValue />
                                <option defaultValue={256}>256</option>
                                <option defaultValue={512}>512</option>
                                <option defaultValue={1024}>1024</option>
                                <option defaultValue={2048}>2048</option>
                                <option defaultValue={3072}>3072</option>
                                <option defaultValue={4096}>4096</option>
                                <option defaultValue={6144}>6144</option>
                                <option defaultValue={8000}>8000</option>
                                <option defaultValue={8008}>8008</option>
                                <option defaultValue={8192}>8192</option>
                                <option defaultValue={11264}>11264</option>
                                <option defaultValue={12288}>12288</option>
                                <option defaultValue={16384}>16384</option>
                                <option defaultValue={24576}>24576</option>
                              </select>{" "}
                            </span>
                          </label>
                          <label className="row_cell">
                            <b className="row_cap">до</b>
                            <span className="row_el">
                              <select
                                id="to_el_4196"
                                className="row_sel"
                                name="to_el_4196"
                                onFocus="this.style.color='#333333';"
                                onBlur="this.style.color='#333333';"
                              >
                                <option value="selected" defaultValue />
                                <option defaultValue={256}>256</option>
                                <option defaultValue={512}>512</option>
                                <option defaultValue={1024}>1024</option>
                                <option defaultValue={2048}>2048</option>
                                <option defaultValue={3072}>3072</option>
                                <option defaultValue={4096}>4096</option>
                                <option defaultValue={6144}>6144</option>
                                <option defaultValue={8000}>8000</option>
                                <option defaultValue={8008}>8008</option>
                                <option defaultValue={8192}>8192</option>
                                <option defaultValue={11264}>11264</option>
                                <option defaultValue={12288}>12288</option>
                                <option defaultValue={16384}>16384</option>
                                <option defaultValue={24576}>24576</option>
                              </select>{" "}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="10" header="Шина обмена с памятью">
                  <fieldset
                    className="ver-filter_row select"
                    data-parameterid={4198}
                  >
                    <div className="ver-filter_box">
                      <div className="b-row row-cells-2">
                        <label className="row_note">бит</label>
                        <div className="row_in">
                          <label className="row_cell">
                            <b className="row_cap">от</b>
                            <span className="row_el">
                              <select
                                id="from_el_4198"
                                className="row_sel"
                                name="from_el_4198"
                                onFocus="this.style.color='#333333';"
                                onBlur="this.style.color='#333333';"
                              >
                                <option value="selected" defaultValue />
                                <option defaultValue={32}>32</option>
                                <option defaultValue={64}>64</option>
                                <option defaultValue={96}>96</option>
                                <option defaultValue={128}>128</option>
                                <option defaultValue={160}>160</option>
                                <option defaultValue={192}>192</option>
                                <option defaultValue={256}>256</option>
                                <option defaultValue={320}>320</option>
                                <option defaultValue={352}>352</option>
                                <option defaultValue={384}>384</option>
                                <option defaultValue={448}>448</option>
                                <option defaultValue={512}>512</option>
                                <option defaultValue={768}>768</option>
                                <option defaultValue={896}>896</option>
                                <option defaultValue={1024}>1024</option>
                                <option defaultValue={2048}>2048</option>
                                <option className="is-empty" defaultValue={4096}>
                                  4096
                                </option>
                                <option className="is-empty" defaultValue={8192}>
                                  8192
                                </option>
                              </select>{" "}
                            </span>
                          </label>
                          <label className="row_cell">
                            <b className="row_cap">до</b>
                            <span className="row_el">
                              <select
                                id="to_el_4198"
                                className="row_sel"
                                name="to_el_4198"
                                onFocus="this.style.color='#333333';"
                                onBlur="this.style.color='#333333';"
                              >
                                <option value="selected" defaultValue />
                                <option defaultValue={32}>32</option>
                                <option defaultValue={64}>64</option>
                                <option defaultValue={96}>96</option>
                                <option defaultValue={128}>128</option>
                                <option defaultValue={160}>160</option>
                                <option defaultValue={192}>192</option>
                                <option defaultValue={256}>256</option>
                                <option defaultValue={320}>320</option>
                                <option defaultValue={352}>352</option>
                                <option defaultValue={384}>384</option>
                                <option defaultValue={448}>448</option>
                                <option defaultValue={512}>512</option>
                                <option defaultValue={768}>768</option>
                                <option defaultValue={896}>896</option>
                                <option defaultValue={1024}>1024</option>
                                <option defaultValue={2048}>2048</option>
                                <option defaultValue={4096}>4096</option>
                                <option defaultValue={8192}>8192</option>
                              </select>{" "}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="11" header="Низкопрофильная карта (Low Profile)">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={12133}
                  >
                    <div className="ver-filter_ttl">
                      <span className="ver-filter_name">
                        <span className="dot">

                        </span>
                      </span>
                      <span
                        className="b-tip"
                        title="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430"
                        data-name="tip"
                        data-parameterid={12133}
                      />
                    </div>
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="f6e6dcfe"
                            className="toggle_inp"
                            type="radio"
                            name="el_12133"
                            defaultValue={251666}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={251666}>
                            Да<sup className="toggle_sup facet_cnt">87</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f0119f81"
                            className="toggle_inp"
                            type="radio"
                            name="el_12133"
                            defaultValue={251667}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={251667}>
                            Нет<sup className="toggle_sup facet_cnt">479</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="12" header="Поддержка SLI/CrossFire">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={4200}
                  >
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="fce17ad2"
                            className="toggle_inp"
                            type="radio"
                            name="el_4200"
                            defaultValue={27630}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27630}>
                            Да<sup className="toggle_sup facet_cnt">281</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="fb3ae031"
                            className="toggle_inp"
                            type="radio"
                            name="el_4200"
                            defaultValue={27629}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27629}>
                            Нет<sup className="toggle_sup facet_cnt">286</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="13" header="Поддержка DirectX">
                  <fieldset
                    className="ver-filter_row checkSquare collapsed"
                    data-parameterid={4217}
                  >
                    <div className="ver-filter_box box-scrollable">
                      <div id="b_sp_4217">
                        <label className="b-cbx">
                          <input
                            id="f1affccc"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={804255}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={804255}>
                            9.0c <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="ffa0097f"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={27716}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={27716}>
                            10.0 <sup className="cbx_sup facet_cnt">1</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fc424135"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={27720}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={27720}>
                            10.1 <sup className="cbx_sup facet_cnt">6</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f026acd4"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={208996}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={208996}>
                            11 <sup className="cbx_sup facet_cnt">17</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fa06ac53"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={340662}
                          />{" "}
                          <i />
                          <span className="cbx_txt gray" data-defaultValueid={340662}>
                            11.1 <sup className="cbx_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="f6d0ae04"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={424105}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={424105}>
                            11.2 <sup className="cbx_sup facet_cnt">2</sup>
                          </span>
                        </label>
                        <label className="b-cbx">
                          <input
                            id="fbfd8859"
                            className="checkbox cbx_inp"
                            type="checkbox"
                            name="el_4217[]"
                            defaultValue={497727}
                          />{" "}
                          <i />
                          <span className="cbx_txt" data-defaultValueid={497727}>
                            12 <sup className="cbx_sup facet_cnt">537</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="14" header="Выход VGA">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={7330}
                  >
                    <div className="ver-filter_ttl">
                      <span className="ver-filter_name">
                        <span className="dot">Выход VGA</span>
                      </span>
                      <span
                        className="b-tip"
                        title="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430"
                        data-name="tip"
                        data-parameterid={7330}
                      />
                    </div>
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="ff3a1b38"
                            className="toggle_inp"
                            type="radio"
                            name="el_7330"
                            defaultValue={110846}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={110846}>
                            Да<sup className="toggle_sup facet_cnt">76</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f3a46e22"
                            className="toggle_inp"
                            type="radio"
                            name="el_7330"
                            defaultValue={110845}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={110845}>
                            Нет<sup className="toggle_sup facet_cnt">491</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="15" header="Выход HDMI">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={4205}
                  >
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="f96142be"
                            className="toggle_inp"
                            type="radio"
                            name="el_4205"
                            defaultValue={27640}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27640}>
                            Да<sup className="toggle_sup facet_cnt">532</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f3b4bef8"
                            className="toggle_inp"
                            type="radio"
                            name="el_4205"
                            defaultValue={27639}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27639}>
                            Нет<sup className="toggle_sup facet_cnt">35</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="16" header="Выход Mini HDMI">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={12651}
                  >
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="f30a36f5"
                            className="toggle_inp"
                            type="radio"
                            name="el_12651"
                            defaultValue={257858}
                          />{" "}
                          <i />
                          <span className="toggle_txt gray" data-defaultValueid={257858}>
                            Да
                            <sup className="toggle_sup facet_cnt" />
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f89e07c6"
                            className="toggle_inp"
                            type="radio"
                            name="el_12651"
                            defaultValue={260348}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={260348}>
                            Нет<sup className="toggle_sup facet_cnt">567</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="17" header="Выход DisplayPort">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={8182}
                  >
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="f39a8e4f"
                            className="toggle_inp"
                            type="radio"
                            name="el_8182"
                            defaultValue={137937}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={137937}>
                            Да<sup className="toggle_sup facet_cnt">457</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f728922b"
                            className="toggle_inp"
                            type="radio"
                            name="el_8182"
                            defaultValue={137939}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={137939}>
                            Нет<sup className="toggle_sup facet_cnt">110</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
                <Panel key="18" header="Необходимость дополнительного питания">
                  <fieldset
                    className="ver-filter_row radioSquare collapsed"
                    data-parameterid={4223}
                  >
                    <div className="ver-filter_box">
                      <div className="b-toggle">
                        <label className="toggle_rd">
                          <input
                            id="fc5c74ef"
                            className="toggle_inp"
                            type="radio"
                            name="el_4223"
                            defaultValue={27742}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27742}>
                            Да<sup className="toggle_sup facet_cnt">369</sup>
                          </span>
                        </label>
                        <label className="toggle_rd">
                          <input
                            id="f172e229"
                            className="toggle_inp"
                            type="radio"
                            name="el_4223"
                            defaultValue={27741}
                          />{" "}
                          <i />
                          <span className="toggle_txt" data-defaultValueid={27741}>
                            Нет<sup className="toggle_sup facet_cnt">198</sup>
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </Panel>
              </Collapse>
              <div className="ver-filter_submit">
                <Button type="primary">
                  Подобрать
                </Button>
                <Button>
                  Сбросить
                </Button>
              </div>
              <div className="ver-filter_footer">
                <a href="choice-full/index.html" data-name="submitdetailfull">
                  все параметры подбора »
                </a>
              </div>{" "}
            </section>
            <div
              className="b-check-result"
              style={{
                left: "250px",
                top: "783px",
                display: "none"
              }}
              id="choiceinfo"
            >
              <span>
                Найдено: 567, показать
              </span>
            </div>
          </form>
        </section>
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
              <h4 className="topics_title">Популярные производители:</h4>
              <ul className="topics_list">
                <li className="topics_item">
                  <a href="asus/index.html">ASUS</a>
                </li>
                <li className="topics_item">
                  <a href="gigabyte/index.html">GigaByte</a>
                </li>
                <li className="topics_item">
                  <a href="msi/index.html">MSI</a>
                </li>
                <li className="topics_item">
                  <a href="palit/index.html">Palit</a>
                </li>
                <li className="topics_item">
                  <a href="innovision/index.html">Inno3D</a>
                </li>
                <li className="topics_item">
                  <a href="sapphire/index.html">Sapphire</a>
                </li>
                <li className="topics_item">
                  <a href="zotac/index.html">ZOTAC</a>
                </li>
                <li className="topics_item">
                  <a href="pny/index.html">PNY</a>
                </li>
                <li className="topics_item">
                  <a href="gainward/index.html">Gainward</a>
                </li>
                <li className="topics_item">
                  <a href="powercolor/index.html">PowerColor</a>
                </li>
                <li className="topics_item">
                  <a href="evga/index.html">EVGA</a>
                </li>
              </ul>
              <h4 className="topics_title">Обзоры:</h4>
              <ul className="topics_list">
                <li className="topics_item">
                  <a href="https://review.1k.by/pc/Kak_vyibrat_videokarty-451.html">
                    Как выбрать видеокарту?
                  </a>
                </li>
                <li className="topics_item">
                  <a href="https://review.1k.by/pc/Obzor_videokartyi_Nvidia_GeForce_GTX_295-241.html">
                    Обзор видеокарты Nvidia GeForce GTX 295
                  </a>
                </li>
                <li className="topics_item">
                  <a href="https://review.1k.by/pc/GeForce_GTX_260280_protiv_Radeon_HD_48504870-173.html">
                    GeForce GTX 260/280 против Radeon HD 4850/4870 обзор
                    видеокарт
                  </a>
                </li>
              </ul>
              <h4 className="topics_title">В новостях:</h4>
              <ul className="topics_list">
                <li className="topics_item">
                  <a href="https://news.1k.by/pc/AMD_predstavila_videokarty_Radeon_RX_590-64487.html">
                    AMD представила видеокарту Radeon RX 590
                  </a>
                </li>
                <li className="topics_item">
                  <a href="https://news.1k.by/pc/Apple_nachala_ystanavlivat_v_MacBook_Pro_novyie_videokartyi_AMD_Vega-64473.html">
                    Apple начала устанавливать в MacBook Pro новые видеокарты
                    AMD Vega
                  </a>
                </li>
                <li className="topics_item">
                  <a href="https://news.1k.by/pc/Nvidia_predstavila_professionalnyiy_videokarty_Quadro_RTX_4000-64437.html">
                    Nvidia представила профессиональную видеокарту Quadro RTX
                    4000
                  </a>
                </li>
              </ul>
              <h4 className="topics_title">Отзывы на видеокарты:</h4>
              <ul className="topics_list">
                <li className="topics_item">
                  <a href="asus/ASUS_Radeon_RX_460_1200Mhz_PCI_E_30_2048Mb_7000Mhz_128_bit_DVI_HDMI_HDCP-2604525.html#comments">
                    Отзыв о ASUS Radeon RX 460 1200Mhz PCI-E 3.0 2048Mb 7000Mhz
                    128 bit DVI HDMI HDCP
                  </a>
                </li>
                <li className="topics_item">
                  <a href="palit/Palit_GeForce_GTX_760_1072Mhz_PCI_E_30_2048Mb_6200Mhz_256_bit_2xDVI_HDMI_HDCP-888029.html#comments">
                    Отзыв о Palit GeForce GTX 760 1072Mhz PCI-E 3.0 2048Mb
                    6200Mhz 256 bit 2xDVI HDMI HDCP
                  </a>
                </li>
                <li className="topics_item">
                  <a href="asus/ASUS_Radeon_R7_240_730Mhz_PCI_E_30_2048Mb_1800Mhz_128_bit_DVI_HDMI_HDCP-1004905.html#comments">
                    Отзыв о ASUS Radeon R7 240 730Mhz PCI-E 3.0 2048Mb 1800Mhz
                    128 bit DVI HDMI HDCP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

export default Sidebar
