import React from 'react';
import DefaultTemplate from '@components/common/Screen/Default';
import styles from './book.module.scss';
import avatar from '@assets/images/avatar.png';
import { Input } from '@pasal/cio-component-library';
import Button from '../../common/Button/Button';
import TextField from '../../common/TextField/TextField';
import Model from '../Model/Model';
// import SelectTime from '../SelectTime';
// import SelectDate from '../SelectDate';
import SelectDate from '../SelectDateAndTime/SelectDate';
import SelectTime from '../SelectDateAndTime/SelectTime';

type Props = {}

export default function BookAnAppointment({ }: Props) {
  const style = {
    width: '35px',
    height: '35px',
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.15)',
    borderRadius: '23px'
  }
  const avatarEl = () => {
    return <img src={avatar} alt='' style={style} />
  }

  const inputStyle = {
    padding: '13px',
    height: '44px',
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
  }
  return (
    <DefaultTemplate rightIcon={avatarEl()}>
      {/* <SelectTime /> */}
      <SelectDate/>
      <div className={styles.appointments}>
        <div className={styles.row}>
          <div className={styles.title}>Marketing Conference</div>
          <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and
            typesetting  industry.</div>
        </div>
        <div className={styles.row}>
          {/* <Input label='Full Name' size="small"/> */}
          <TextField label='Full Name' id='full-name' defaultValue='' />
          <TextField label='Phone Number' id='phone-number' defaultValue='' />
          <TextField label='Email Address' id='email-address' defaultValue='' />
          <Button text='Pick date' variant='secondary' />
          <Button text='Pick available time' variant='secondary' />
        </div>

        <div className={styles.row}>
          <Button text='Confirm' variant='primary' />
          <Button text='Cancel' variant='secondary' />
        </div>

      </div>
    </DefaultTemplate>
  )
}