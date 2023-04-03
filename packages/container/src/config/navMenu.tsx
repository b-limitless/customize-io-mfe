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

export const sideNavConfig = [
    {
        title: "Dashboard", icon: menuIcons.dashboard,
        children: [],
        component: <div></div>
    },
    {
        title: "Product", icon: menuIcons.product,
        children: [{ title: "Product one", component: "" }, { title: "Product two", component: "" }]
    },
    {
        title: "Pricing", icon: menuIcons.pricing,
        children: [{ title: "Pricing one" }, { title: "Pricing Two" }]
    }
]