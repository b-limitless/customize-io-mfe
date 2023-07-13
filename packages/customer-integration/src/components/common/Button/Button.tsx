import React, { ReactNode } from 'react';
import styles from './button.module.scss';

type button = 'primary' | 'secondary';

interface Props {
    text: string | ReactNode;
    variant: button;
}

export default function Button({ text, variant }: Props) {

    let variantClass = "";

    if (variant === 'primary') {
        variantClass = styles.btn__primary;
    }

    if (variant === 'secondary') {
        variantClass = styles.btn__secondary;
    }

    return (
        <button className={styles.btn + ' ' + variantClass}>{text}</button>
    )
}