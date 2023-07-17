import React, { ReactNode } from 'react';
import Model from '../Model/Model';
import Button from '../../common/Button/Button';
import styles from './styles.module.scss';
import ConfirmationTemplate from './Template';

type Props = {

}


export default function BookingConfirmation({ }: Props) {
    return (
        <Model ref={null}>
            <ConfirmationTemplate title='Confirmation' description='Hey you have book the meeting
                    successfully, Kindly check you
                    email for confirmation' confirmation='confirmation' />

        </Model>
    )
}