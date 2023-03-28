import React from "react"
import SideMenu from "./components/common/SideMenu";
import "./styles/main.scss";
// import Header from "/src/components/common/Header";

type Props = {}

export default function App({ }: Props) {
  return (
    <div className="container">
      <div className="left side--navbar">
          <SideMenu/>
      </div>
      <div className="right services">
        Loading all services
      </div>
    </div>
  )
}