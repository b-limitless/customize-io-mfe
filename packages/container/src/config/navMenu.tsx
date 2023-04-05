import React from "react";
import ProductIcon from "../assets/svg/product-icon.svg";
import DashboardIcon from "../assets/svg/dashboard.svg";
import PricingIcon from "../assets/svg/pricing.svg";
import ArrowDown from "../assets/svg/arrow-down.svg";

export const menuIcons = {
    product: <ProductIcon />,
    dashboard: <DashboardIcon />,
    pricing: <PricingIcon />
}

export enum menuEnum {
    Dashboard = "Dashboard",
    Product_Febric = "Product_Febric",
    Product_Shirts = "Product_Shirts",
    Product_Pants = "Product_Pants"
}

const keys = [...Object.keys(menuEnum)] as const;

export type menuIds = typeof keys[number];

export const sideNavConfig = [
    {
        title: "Dashboard", icon: menuIcons.dashboard,
        children: [],
        component: <div></div>
    },
    {
        title: "Product", icon: menuIcons.product,
        children: [{ title: "Febric", component: "" }, { title: "Thread", component: "" }, { title: "Shirts", component: "" }, { title: "Pants", component: "" }]
    },
    {
        title: "Orders", icon: menuIcons.pricing,
        children: [{ title: "Pricing one" }, { title: "Pricing Two" }]
    }
];


