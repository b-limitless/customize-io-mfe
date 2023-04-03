import React from "react"
import SideMenu from "./components/common/SideMenu";
import "./styles/main.scss";
// import Header from "/src/components/common/Header";
import ArrowRight from "./assets/svg/arrow-right.svg";

type Props = {}

export default function App({ }: Props) {
  return (
    <>
    <input type="radio" id="toggle-menu-checkbox" className="toggle-menu-checbox" name="toggle-menu-checkbox"/>
      
      <label htmlFor="toggle-menu-checkbox" >
        <div className="toggal-menu">
          {/* <img src={arrowRight} alt="" /> */}
          <ArrowRight/>
        </div>
      </label>

      <div className="container">
      <div className="left side--navbar hide">
        <SideMenu />
      </div>
      <div className="right services">
        Loading all services
      </div>
    </div>
    </>
    
  )
}