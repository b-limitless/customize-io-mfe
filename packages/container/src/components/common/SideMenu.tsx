import React from 'react';
import ArrowLeft from "../../assets/svg/arrow-left.svg";
import ProductIcon from "../../assets/svg/product-icon.svg";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import PricingIcon from "../../assets/svg/pricing.svg";
import avatar from "../../assets/img/avatar.png";
import DashboardIcon from "../../assets/svg/dashboard.svg";
import FaqIcon from "../../assets/svg/faq.svg";
import LogoIcon from "../../assets/svg/logo-icon.svg";
import LogoText from "../../assets/svg/logo-text.svg";
import logout from "../../assets/svg/logout.svg";
import rightArrowRound from "../../assets/svg/right-arrow-round.svg";
import Setting from "../../assets/svg/settings.svg";
import switchPro from "../../assets/svg/switch-pro.svg";
import { sideNavConfig } from '../../config/navMenu';


type Props = {}
export default function SideMenu({ }: Props) {
  return (
    <div className="left-menu">
      <div className="menu-wrapper">
        <div className="top">
          <div className="row logo--arrow">
            <div className="item logo">
              <LogoIcon />
              <LogoText />
              { }
              { }
            </div>
            <div className="item arrow">
              <input type="radio" className="left-arrow-checkbox" name="toggle-menu-checkbox" id="left-arrow-checkbox" />
              <label htmlFor="left-arrow-checkbox">
                <ArrowLeft />
              </label>
            </div>
          </div>
          <div className="row navigation">
            <ul className="navigation--ul">

              {sideNavConfig.map((row, i) => <li className="item base-list" key={i}>
                <input type="radio" name="ci-root-menu" id={`cio-product-li-${i}`} className="major-list" />
                <label className="title-icon" htmlFor={`cio-product-li-${i}`}>
                  <span className="icon">
                    {row.icon}

                  </span>
                  <span className="title">{row.title}</span>
                  {row.children.length > 0 && <span className="arrow">
                    <ArrowDown />
                  </span>}
                </label>
                <ul className="sub--ul">
                  {row.children.map((list, j) => <>
                    <input type="radio" name="sub-menu-checkbox" id={`ci-title-${i}-${j}`} className="sub-menu-checkbox" />
                    <label htmlFor={`ci-title-${i}-${j}`}>
                      <li className="sub--li">{list.title}</li>
                    </label></>)}
                </ul>
              </li>)}

              {/* <li className="item base-list">
                <input type="radio" name="ci-root-menu" id="cio-product-li-0" className="major-list" />
                <label className="title-icon" htmlFor="cio-product-li-0">
                  <span className="icon">
                    <DashboardIcon />
                  </span>
                  <span className="title">Dashboard</span>
                </label>
              </li>
              <li className="item base-list">
                <input type="radio" name="ci-root-menu" id="cio-product-li" className="major-list" />
                <label className="title-icon" htmlFor="cio-product-li">
                  <span className="icon">
                    <ProductIcon />
                  </span>
                  <span className="title">Products</span>
                  <span className="arrow">
                    <ArrowDown />
                  </span>
                </label>
                <ul className="sub--ul">
                  <>
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-one" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-one">
                    <li className="sub--li">Title One</li>
                  </label>
                  </>
                  
                  <>
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-two" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-two">
                    <li className="sub--li">Title Two</li>
                  </label>
                  </>
                  
                  <>
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-three" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-three">
                    <li className="sub--li">Title Three</li>
                  </label>
                  </>
                  
                </ul>
              </li>
              <li className="item base-list">
                <input type="radio" name="ci-root-menu" id="cio-product-li-1" className="major-list" />
                <label className="title-icon" htmlFor="cio-product-li-1">
                  <span className="icon">
                    <PricingIcon />
                  </span>
                  <span className="title">Pricing</span>
                  <span className="arrow">
                    <ArrowDown />
                  </span>
                </label>
                <ul className="sub--ul">
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-4" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-4">
                    <li className="sub--li">Title One</li>
                  </label>
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-5" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-5">
                    <li className="sub--li">Title Two</li>
                  </label>
                  <input type="radio" name="sub-menu-checkbox" id="ci-title-6" className="sub-menu-checkbox" />
                  <label htmlFor="ci-title-6">
                    <li className="sub--li">Title Three</li>
                  </label>
                </ul>
              </li> */}



            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom--top">
            <div className="row switch--account">
              <div className="col icon">
                <img src={switchPro} />
              </div>
              <div className="col details">
                <div className="details--item switch">Switch account
                  <br />to <span>Pro</span></div>
                <div className="details--item unlinited">Unlimited access to <br />biggest 3d models service <br />with highest quality</div>
                <div className="details--item ico-getpro">
                  <div className="get-pro">Get your Pro</div>
                  <div className="icon-right">
                    <img src={rightArrowRound} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row item">
              <input type="radio"
                name="bottom-checkbox"
                id="settings"
                className="bottom-checkbox" />
              <label htmlFor="settings">
                <div className="icon">
                  <Setting />
                  { }
                </div>
              </label>
              <div className="text settings title">Settings</div>
            </div>
            <div className="row item">
              <input type="radio"
                name="bottom-checkbox"
                id="faq-checkbox"
                className="bottom-checkbox" />
              <label htmlFor="faq-checkbox">
                <div className="icon">
                  <FaqIcon />
                  { }
                </div>
              </label>
              <div className="text settings">FAQ</div>
            </div>
          </div>
          <div className="bottom--bottom">
            <input type="checkbox" id="avatar-profile-info" className="avatar-profile-info" />
            <label htmlFor="avatar-profile-info" >
              <div className="col avatar">
                <img src={avatar} />
              </div>
            </label>
            <div className="profile-logout">
              <div className="col name--role">
                <div className="name">Bharat Shah</div>
                <div className="role">Administrator</div>
              </div>
              <div className="col logout">
                <img src={logout} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
