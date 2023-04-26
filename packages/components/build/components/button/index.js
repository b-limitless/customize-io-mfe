import React from 'react';
import { Button as MButton } from '@mui/material';
import { colors } from '../../config/colors';
var styles = function (variant) {
    var background = variant === 'primary' ? colors.primary : variant === 'secondary' ? colors.secondary : colors.primary;
    var color = variant === 'primary' ? colors.light : variant === 'secondary' ? colors.primary : colors.primary;
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
    };
};
var Button = function (_a) {
    var variant = _a.variant;
    return (React.createElement(MButton, { sx: styles(variant) }, "Register Account"));
};
export default Button;
