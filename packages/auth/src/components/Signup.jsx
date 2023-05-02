import {
  Button,
  Checkbox,
  Input,
  InputAdornments,
} from "components/ComponentsApp";
import React from "react";
import BackLeftIcon from "../assets/svg/back-left-icon.svg";
import Template from "../common/Template";
import SignupFeature from "./features/signup.feature";
import VerifyFeature from "./features/verify.feature";

export default function Signup() {
  return (
    <Template>
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
        {/* <div className="group-elements">
          <div className="row registration">
            <div className="title">Register Individual Account!</div>
            <div className="purpose">
              For the purpose of industry regulation, your details are required.
            </div>

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
              <InputAdornments label="Password" />

              <InputAdornments label="Confirm password" />

              <div className="agreement">
                <Checkbox id="check-me" />
                <label htmlFor="check-me">I agree to terms & conditions</label>
              </div>

              <Button variant="primary" text="Register Account"></Button>
            </div>
          </div>
        </div> */}
        {/* <SignupFeature/> */}
        <VerifyFeature/>
      </div>
    </Template>
  );
}
