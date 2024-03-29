import React from 'react';
import { TextField as Input } from '@mui/material';
import { style } from '../../styles'

type Props = {
    label: string;
    id: string;
    defaultValue?: string;
    [x: string]: any;
}


export default function TextField({ error, label, id, defaultValue, ...rest }: Props) {
   
    return (
        <Input
            label={label}
            id={id}
            defaultValue={defaultValue}
            size="small"
            sx={style}
            InputLabelProps={{
                style: {   color: "#000",
               
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal", 
                opacity: 0.5 }, 
             }}
           {...rest}
           error={error}
           helperText={error ? rest.helpText : null}
        
        />
    )
}