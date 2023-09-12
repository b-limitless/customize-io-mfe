import React from 'react'
import {
    Button,
    Checkbox,
    Input,
    InputAdornments,
} from "@pasal/cio-component-library";
import { FormInterface } from '../../interfaces/user/inde';

type Props = {
    onChangeHandler:Function;
    form:FormInterface;
    onMouseLeaveEventHandler:Function;
}



export default function SignupFeature({onChangeHandler, form, onMouseLeaveEventHandler }: Props) {
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
                    name='fullName'
                    onChange={onChangeHandler}
                    value={form.fullName}
                    onMouseOut={() => onMouseLeaveEventHandler('fullName', form.fullName)}
                    // 
                    />
                    <Input
                        label="Email address*"
                        id="email-address"
                        defaultValue=""
                        type="email"
                    //  error={true}
                    // helperText="Incorrect entry."
                    name='email'
                    onChange={onChangeHandler}
                    value={form.email}
                    />
                    <InputAdornments label="Password" 
                    name='password'
                    onChange={onChangeHandler}
                    value={form.password}
                    />

                    <InputAdornments label="Confirm password" 
                    name='confirmPassword'
                    onChange={onChangeHandler}
                    value={form.confirmPassword}
                    />

                    <div className="agreement">
                        <Checkbox id="check-me" 
                        checked={form.agreement}
                        name='agreement'
                        onChange={onChangeHandler}
                        />
                        <label htmlFor="check-me">I agree to terms & conditions</label>
                    </div>

                    <Button variant="primary" text="Register Account"></Button>
                </div>
            </div>
        </div>
    )
}