import React, { ReactNode } from 'react';
import Model from '../Model/Model';
import Button from '../../common/Button/Button';
import styles from './styles.module.scss';

type confirmation = 'confirmation' | 'navigation';

type Props = {
    title: string;
    description: string;
    confirmation: confirmation
}

export default function ConfirmationTemplate({ title, description, confirmation }: Props) {
    return (

        <div className={styles.confirmation}>
            <div className={styles.title}>{title} </div>
            <div className={styles.description}>{description}</div>

            <div className={styles.actions}>
                <button className={styles.light__border}>
                    {confirmation === 'confirmation' ? 'Check Email' : 'Ok'}

                </button>
                {confirmation === 'navigation' && <Button variant='primary' text='Check Email' className={styles.dark__primary} />}
            </div>
        </div>

    )
}