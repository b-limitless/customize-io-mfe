import React from 'react'
import logoPrimary from "../../assets/svg/logo-primary.svg";
import arrowLeft from "../../assets/svg/arrow-left.svg"
import productIcon from "../../assets/svg/product-icon.svg";
import switchPro from "../../assets/svg/switch-pro.svg";
import rightArrowRound from "../../assets/svg/right-arrow-round.svg";
import setting from "../../assets/svg/settings.svg";
import avatar from "../../assets/img/avatar.png";
import arrowDown from "../../assets/svg/arrow-down.svg";

type Props = {}

export default function SideMenu({ }: Props) {
  return (
    <div className="left-menu">
      <div className="menu-wrapper">
        <div className="top">
          <div className="row logo--arrow">
            <div className="item logo">
              <img src={logoPrimary} alt="Customize io" />
            </div>
            <div className="item arrow">
              <img src={arrowLeft} alt="Toggle menu" />
            </div>
          </div>

          <div className="row navigation">
            <ul className="navigation--ul">
              <li className="item base-list">
                <div className="title-icon">
                  <span className="icon"><img src={productIcon} /></span>
                  <span className="title">Dashboard</span>
                </div>
              </li>

              <li className="item base-list">
                <input type="checkbox" name="" id="cio-product-li" className="major-list"/>
                <label className="title-icon" htmlFor="cio-product-li">
                  <span className="icon"><img src={productIcon} /></span>
                  <span className="title">Products</span>
                  <span className="arrow"><img src={arrowDown}/></span>
                </label>


                <ul className="sub--ul">
                  <li className="sub--li">Title One</li>
                  <li className="sub--li">Title Two</li>
                  <li className="sub--li">Title Three</li>
                </ul>
              </li>

              <li className="item base-list">
                <input type="checkbox" name="" id="cio-product-li-1" className="major-list"/>
                <label className="title-icon" htmlFor="cio-product-li-1">
                  <span className="icon"><img src={productIcon} /></span>
                  <span className="title">Products</span>
                  <span className="arrow"><img src={arrowDown}/></span>
                </label>


                <ul className="sub--ul">
                  <li className="sub--li">Title One</li>
                  <li className="sub--li">Title Two</li>
                  <li className="sub--li">Title Three</li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

        <div className="bottom">
          <div className="botton-top">
            <div className="row switch--account">
              <div className="col icon">
                <img src={switchPro} />
              </div>
              <div className="col details">
                <div className="details--item">Switch account
                  to <span>Pro</span></div>
                <div className="details--item unlinited">Unlimited access to biggest 3d models service with highest quality</div>
                <div className="details--item">
                  <div className="get-pro">Get your Pro</div>
                  <div className="icon-right">
                    <img src={rightArrowRound} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="icon">
                <img src={setting} />
              </div>
              <div className="settings">Settings</div>
            </div>
            <div className="row">
              <div className="icon">
                <img src={setting} />
              </div>
              <div className="settings">FAQ</div>
            </div>
          </div>
          <div className="bottom-bottom">
            <div className="col avatar">
              <img src={avatar} />
            </div>
            <div className="col name"></div>
            <div className="col logout"></div>
          </div>

        </div>

      </div>
    </div>
  )
}
