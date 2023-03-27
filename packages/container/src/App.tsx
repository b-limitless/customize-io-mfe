import React from "react"
import logoPrimary from "assets/svg/logo-primary.svg";
import arrowLeft from "assets/svg/arrow-left.svg"
import productIcon from "assets/svg/product-icon.svg";
import switchPro from "assets/svg/switch-pro.svg";
import rightArrowRound from "assets/svg/right-arrow-round.svg";
import setting from "assets/svg/settings.svg";
import avatar from "avatar.png";
import "styles/main.scss";
//import Header from "components/common/Header";

type Props = {}

export default function App({ }: Props) {
  return (
    <div className="container">
      <div className="left side--navbar">
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
                    <span className="icon"><img src={productIcon} /></span>
                    <div className="title">Dashboard</div>
                  </li>

                  <li className="item base-list">
                    <span className="icon"><img src={productIcon} /></span>
                    <div className="title">Dashboard</div>
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
      </div>
      <div className="right services">
        Loading all services
      </div>
    </div>
  )
}