import React from 'react'
import { Button, Input, Select, Checkbox, InputWithIcon, InputAdornments } from './common/components';

export default function App() {
    return (
        <>
        {/* //variant='secondary' */}
            <Button variant="light"  text="Restister"/>
            <br />
            <br />
            <br />
            <Input
                label="Required"
                id="tex2434"
                defaultValue="Hello World"
                type="text"
                //  error={true}
                helperText="Incorrect entry."
            />
            <Select test="Hi ther"/>
            <Checkbox/>
            <InputWithIcon>
            <span className="input-icon default-font">
                Show
            </span>
            </InputWithIcon>
            <br/>
            <br/>
            <InputAdornments label="Confirm password"/>
        </>
    )
}
