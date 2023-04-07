import React from "react"
import PriceSVG from "../assets/svg/price.svg";

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <div className="ci--dashboard">
      <div className="ci--dashboard-title">
        Welcome Back, Marci
      </div>
      <div className="ci--dashboard-staticstic">
        <div className="col">
          <div className="row price">
            <div className="price--title">89,935</div>
            <div className="price--icon"><PriceSVG/></div>
          </div>
        </div>
      </div>
    </div>
  )
}