import React, { ReactNode } from 'react';
declare type button = 'primary' | 'secondary' | 'error';
interface Props {
    text: string | ReactNode;
    variant: button;
    className?: any;
    [x: string]: any;
}
export default function Button({ text, variant, className, ...rest }: Props): React.JSX.Element;
export {};
