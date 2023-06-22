import React, { useState } from "react"
import SideMenu from "./SideMenu";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { menuIds, menuEnum } from "../../config/navMenu";
import { Link } from "react-router-dom";
interface ContainerInterface {
    setSelectedMenu: Function,
    selectedMenu: menuIds,
    children: any;
    [x:string]:any;
}
export default function Container({ children, setSelectedMenu, selectedMenu, setShowProfileSideModel }: ContainerInterface) {
    return (
        <>
            <input type="radio" id="toggle-menu-checkbox" className="toggle-menu-checbox" name="toggle-menu-checkbox" />
            <label htmlFor="toggle-menu-checkbox" >
                <div className="toggal-menu">
                    <ArrowRight />
                </div>
            </label>
            { }
            <div className="container">
                <div className="left side--navbar hide">
                    <SideMenu
                        setSelectedMenu={setSelectedMenu}
                        setShowProfileSideModel={setShowProfileSideModel}
                    />
                </div>
                <div className="right services">
                    { }
                    { }
                    {children}
                </div>
            </div>
        </>
    )
}