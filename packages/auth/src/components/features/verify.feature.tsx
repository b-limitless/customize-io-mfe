import React from 'react'
import {
    Button,
    Checkbox,
    Input,
    InputAdornments,
} from "components/ComponentsApp";

type Props = {}

export default function VerifyFeature({ }: Props) {
    return (
        <div className="group-elements">
            <div className="row registration">
                <div className="title">Please verify your email</div>
                <div className="purpose">
                Please check you inbox or spam, We have sent you en email for the verification.
                </div>

                <div className="form">
                    <Button variant="primary" text="Register Account">Resend the link</Button>
                </div>
            </div>
        </div>
    )
}