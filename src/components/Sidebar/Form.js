import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Collapse, Button, Input, InputNumber, Select } from 'antd'
import ButtonWithBadge from './ButtonWithBadge'
import YesOrNo from './YesOrNo'
import ItemsList from './ItemsList'

const { Panel } = Collapse
const { Option } = Select

class Form extends Component {
  render() {
    const { opened } = this.props
    return(
      <section className="search">
        <form
          className="b-ver-filter"
          action="https://komp.1k.by/utility-graphicscards/s.php"
          method="get"
          id="formchoice"
        >
          <section id="parameters-box">
            <Collapse defaultActiveKey={opened} >
              <Panel key="search" header="Поиск по названию" >
                <Input/>
              </Panel>
              <Panel key="price" header="Цена, б.р.">
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
              <Panel key="showGoods" header="Показывать товары">
                <Select>
                  <Option value="retail">в розничной продаже</Option>
                  <Option value="cashless">в безналичной продаже</Option>
                  <Option value="actual">актуальные</Option>
                  <Option value="all">все</Option>
                </Select>
              </Panel>
              <Panel key="manufacturers" header="Производители">
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
              <Panel key="type" header="Тип видеокарты">
                <ButtonWithBadge count="419">игровая</ButtonWithBadge>
                <ButtonWithBadge count="37">профессиональная</ButtonWithBadge>
                <ButtonWithBadge count="82">офисная</ButtonWithBadge>
                <ButtonWithBadge count="29">офисная/игровая</ButtonWithBadge>
              </Panel>
              <Panel key="videoProcessor" header="Название видеопроцессора">
                <ItemsList
                  items={[
                    {
                      title: 'NVIDIA GeForce GTX 1050',
                      count: '30'
                    },
                    {
                      title: 'AMD FirePro S9150',
                      count: '1'
                    },
                  ]}
                />
              </Panel>
              <Panel key="slots" header="Количество занимаемых слотов">
                <ButtonWithBadge count="76">1</ButtonWithBadge>
                <ButtonWithBadge count="420">2</ButtonWithBadge>
                <ButtonWithBadge count="69">3</ButtonWithBadge>
              </Panel>
              <Panel key="typeOfMemory" header="Тип памяти">
                <ButtonWithBadge count="76">GDDR</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR2</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR3</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR4</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR5</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR5X</ButtonWithBadge>
                <ButtonWithBadge count="76">GDDR6</ButtonWithBadge>
                <ButtonWithBadge count="76">HBM</ButtonWithBadge>
                <ButtonWithBadge count="76">HBM2</ButtonWithBadge>
              </Panel>
              <Panel key="sizeOfMemory" header="Объем памяти">
                <Select>
                  <Option value="256">256</Option>
                  <Option value="512">512</Option>
                  <Option value="1024">1024</Option>
                  <Option value="2048">2048</Option>
                  <Option value="3072">3072</Option>
                  <Option value="4096">4096</Option>
                  <Option value="6144">6144</Option>
                  <Option value="8000">8000</Option>
                  <Option value="8008">8008</Option>
                  <Option value="8192">8192</Option>
                  <Option value="11264">11264</Option>
                  <Option value="12288">12288</Option>
                  <Option value="16384">16384</Option>
                  <Option value="24576">24576</Option>
                </Select>
                <Select>
                  <Option value="256">256</Option>
                  <Option value="512">512</Option>
                  <Option value="1024">1024</Option>
                  <Option value="2048">2048</Option>
                  <Option value="3072">3072</Option>
                  <Option value="4096">4096</Option>
                  <Option value="6144">6144</Option>
                  <Option value="8000">8000</Option>
                  <Option value="8008">8008</Option>
                  <Option value="8192">8192</Option>
                  <Option value="11264">11264</Option>
                  <Option value="12288">12288</Option>
                  <Option value="16384">16384</Option>
                  <Option value="24576">24576</Option>
                </Select>
              </Panel>
              <Panel key="memoryBus" header="Шина обмена с памятью">
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
              <Panel key="lowProfile" header="Низкопрофильная карта (Low Profile)">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="sliCrossfire" header="Поддержка SLI/CrossFire">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="directX" header="Поддержка DirectX">
                <ItemsList
                  items={[
                    {
                      title: '9.0c',
                      count: '0'
                    },
                    {
                      title: '10.0',
                      count: '1'
                    },
                    {
                      title: '10.1',
                      count: '6'
                    },
                    {
                      title: '11',
                      count: '17'
                    },
                    {
                      title: '11.1',
                      count: '0'
                    },
                    {
                      title: '11.2',
                      count: '2'
                    },
                    {
                      title: '12',
                      count: '540'
                    }
                  ]}
                />
              </Panel>
              <Panel key="vga" header="Выход VGA">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="hdmi" header="Выход HDMI">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="miniHdmi" header="Выход Mini HDMI">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="displayPort" header="Выход DisplayPort">
                <YesOrNo yesCount="10" noCount="20"/>
              </Panel>
              <Panel key="additionalPowerSupply" header="Необходимость дополнительного питания">
                <YesOrNo yesCount="10" noCount="20"/>
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
    )
  }
}

const mapStateToProps = (state) => ({
  opened: state.form.opened
})


export default connect(mapStateToProps)(Form)
