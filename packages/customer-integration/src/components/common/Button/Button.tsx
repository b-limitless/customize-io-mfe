import React, { ReactNode } from 'react';
import styles from './button.module.scss';

type button = 'primary' | 'secondary' | 'error';

interface Props {
    text: string | ReactNode;
    variant: button;
    className?:any;
    [x:string]:any;
}

export default function Button({ text, variant, className, ...rest }: Props) {

    let variantClass = "";

    if (variant === 'primary') {
        variantClass = styles.btn__primary;
    }

    if (variant === 'secondary') {
        variantClass = styles.btn__secondary;
    }

    if(variant === 'error') {
        variantClass = styles.btn__error;
    }

    return (
        <button className={styles.btn + ' ' + variantClass + ' ' + className} {...rest}>{text}</button>
    )
}