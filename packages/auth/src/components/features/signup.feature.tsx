import React from 'react'
import {
    Button,
    Checkbox,
    Input,
    InputAdornments,
} from "@pasal/cio-component-library"

type Props = {}

export default function SignupFeature({ }: Props) {
    return (
        <div className="group-elements">
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
        </div>
    )
}