import React, { useState } from "react"
import SideMenu from "../../components/common/SideMenu";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { menuIds, menuEnum } from "../../config/navMenu";


interface ContainerInterface {
    setSelectedMenu: Function,
    selectedMenu: menuIds,
    children:any
}

export default function Container({children, setSelectedMenu, selectedMenu }: ContainerInterface) {
    return (
        <>
            <input type="radio" id="toggle-menu-checkbox" className="toggle-menu-checbox" name="toggle-menu-checkbox" />
            <label htmlFor="toggle-menu-checkbox" >
                <div className="toggal-menu">
                    <ArrowRight />
                </div>
            </label>

            <div className="container">
                <div className="left side--navbar hide">
                    <SideMenu
                        setSelectedMenu={setSelectedMenu}
                    />
                </div>
                <div className="right services">
                    {}
                    {/* {selectedMenu === menuEnum.Dashboard && <div>Dashboard</div>} */}
                    {children}
                </div>
            </div>
        </>
    )
}