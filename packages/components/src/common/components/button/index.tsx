import React from 'react';
import { Button as MButton } from '@mui/material';
import { colors } from '../../config/colors';


export type variantType = "primary" | "secondary";

const styles = (variant: variantType) => {
    let background = variant === 'primary' ? colors.primary : variant === 'secondary' ? colors.secondary : colors.primary;
    let color = variant === 'primary' ? colors.light : variant === 'secondary' ? colors.primary : colors.primary;

    return {
        background: background,
        borderRadius: "6px",
        padding: "22px 0",
        color: color,
        width: "100%",
        opacity: 0.9,
        fontFamily: "Figtree, sans-serif",
        fontSize: "16px",
        lineHeight: "20px",
        '&:hover': {
            backgroundColor: background,
            opacity: 1
        }

    }
}

export interface ButtonInterface {
    variant: variantType;
    text: string
}

const Button: React.FC<ButtonInterface> = ({ text, variant }) => {
    return (<MButton sx={styles(variant)}>{text}</MButton>)
}


export default Button;






