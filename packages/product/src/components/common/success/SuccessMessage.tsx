import React from 'react';
import { Button } from "components/ComponentsApp";
import styles from './success-message.module.scss';
import { svgCDNAssets } from '../../../config/assets';

type Props = {}

export default function SuccessMessage({ }: Props) {
    return (
        <div className={styles.base}>
            <div className={styles.order__completed}>
                <img src={svgCDNAssets.successCheck} width={82} height={82} alt='Order Sucessed' />
                <div className={styles.bold__message}>Febric is uploaded successfully</div>
                {/* <div className={styles.confirmation}> You will be receiving confirmation email</div> */}
                <a href="/product/febric">
                    <Button text='Add A Febric' variant='primary'/>
                </a>
            </div>

        </div>
    )
}