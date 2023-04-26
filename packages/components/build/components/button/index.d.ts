import React from 'react';
export type variantType = "primary" | "secondary";
export interface ButtonInterface {
    variant: variantType;
}
declare const Button: React.FC<ButtonInterface>;
export default Button;
