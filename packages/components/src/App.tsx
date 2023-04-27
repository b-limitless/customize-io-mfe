import React from 'react'
import { Button, Input, Select, Checkbox } from './common/components';

export default function App() {
    return (
        <>
        {/* //variant='secondary' */}
            <Button variant="secondary" />
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
        </>
    )
}
