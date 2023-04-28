import React from "react";
import Input from ".";
import "./input-icon.scss";

interface InputWithIconInterface {
    children?: any;
}


export default function InputWithIcon({children, ...props }: InputWithIconInterface) {
    return (
        <div className="cio-input-with-toggle">
            <Input
                {...props}
            />
            {children}
        </div>
    )
}