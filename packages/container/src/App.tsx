import React, {useState} from "react"
import SideMenu from "./components/common/SideMenu";
import ArrowRight from "./assets/svg/arrow-right.svg";
import { menuIds, menuEnum } from "./config/navMenu";

import "./styles/main.scss";

// For example I am lazy loading the components
const Dashboard = (<div>This is dashboard</div>);
const ProductFebric = <div>Product Febric</div>;

type Props = {}
// Import all microfrontend here and then simply 
// Use them based on the clicked menu we can load the required component
// Need to track the state which will measure which component to display

export default function App({ }: Props) {
  const [selectedMenu, setSelectedMenu] = useState<menuIds>("Dashboard");

  console.log("selectedMenu", selectedMenu);
  return (
    <>
    <input type="radio" id="toggle-menu-checkbox" className="toggle-menu-checbox" name="toggle-menu-checkbox"/>
      <label htmlFor="toggle-menu-checkbox" >
        <div className="toggal-menu">
          <ArrowRight/>
        </div>
      </label>

      <div className="container">
      <div className="left side--navbar hide">
        <SideMenu 
        setSelectedMenu={setSelectedMenu}
        />
      </div>
      <div className="right services">
        {selectedMenu === menuEnum.Dashboard && <div>Dashboard</div>}
      </div>
    </div>
    </>
    
  )
}