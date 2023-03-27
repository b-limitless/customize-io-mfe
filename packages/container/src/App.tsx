import React from "react"
// import logoPrimary from "src/assets/svg/logo-primary.svg";
import "styles/main.scss";
import Header from "components/common/Header";

type Props = {}

export default function App({ }: Props) {
  return (
    <div className="container">
      <div className="left side--navbar">
        <div className="left-menu">
          <div className="menu-wrapper">
            <div className="logo--arrow">
              <div className="item">
                {/* <img src={logoPrimary} /> */}
              </div>
              <div className="item"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right services">
        Side menu
      </div>
    </div>
  )
}