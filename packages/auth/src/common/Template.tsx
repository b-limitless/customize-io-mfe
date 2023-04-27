import React from "react";
import { Select, Button, Input, Checkbox } from "components/ComponentsApp";
import facePNG from "../assets/img/face.png";
import LogoICON from "../assets/svg/logo-icon.svg";
import LogoText from "../assets/svg/logo-text.svg";
import "./template.scss";
import BackLeftIcon from "../assets/svg/back-left-icon.svg";

interface TemplateInterface {
  children?: JSX.Element
}

export default function Template({ children }: TemplateInterface) {
  return (
    <div className="cio--template">

      <div className="left col">
        <div className="row logo">
          <span className="icon">
            <LogoICON />
          </span>
          <span className="text">
            <LogoText />
          </span>
        </div>
        <div className="row face">
          <img src={facePNG} alt="" />
        </div>
      </div>
      <div className="right col">
        <div className="group-nav">
          <div className="row navigate">

            <span className="ico-back">
              <span className="icon">
                <BackLeftIcon />
              </span>
              <div className="back">Back</div>
            </span>
            <span className="steps-info">
              <span className="step">STEP 01/03</span>
              <span className="info">Personal Info.</span>
            </span>
          </div>

        </div>
        <div className="group-elements">
          <div className="row registration">

            <div className="title">
              Register Individual Account!
            </div>
            <div className="purpose">For the purpose of industry regulation, your details are required.</div>

            <div className="form">
              <Input
                label="Full name*"
                id="full-name"
                // defaultValue="Hello World"
                type="text"
              //  error={true}
              // helperText="Incorrect entry."
              />
              <Input
                label="Email address*"
                id="email-address"
                defaultValue=""
                type="email"
              //  error={true}
              // helperText="Incorrect entry."
              />
              <Input
                label="Password*"
                id="password"
                // defaultValue="Hello World"
                type="password*"
              //  error={true}
              // helperText="Incorrect entry."
              />
              <Input
                label="Confirm password*"
                id="confirm-password"
                // defaultValue="Hello World"
                type="password*"
              //  error={true}
              // helperText="Incorrect entry."
              />
              <div className="agreement">
                <Checkbox id="check-me"/>
                <label htmlFor="check-me">I agree to terms & conditions</label>

              </div>

              <Button variant="primary">Register Account</Button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}