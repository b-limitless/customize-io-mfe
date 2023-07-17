import React, { useRef, useState } from 'react';
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
import Booking from '../Confimation/Booking';
import BookingConfirmation from '../Confimation/Booking';
import RediectionConfirmation from '../Confimation/Rediection';
import { useLocation } from 'react-router-dom';
import { appRoutes } from '../../../config/routes';
import { componentEnum } from '../../Welcome/welcome.types';
import dayjs, { Dayjs } from 'dayjs';
import useOnClickOutside from '@hooks/useOnClickOutSide';
import { baseExportModel, bookAnAppointmentModel } from './book.model';
import { camelCaseToNormal } from '../../../functions/camelCaseToNormal';
import { FormHelperText } from '@mui/material';
import HelpText from '../../common/TextField/HelpText';

const baseModel = {

}

type Props = {}

interface BaseForm {
  fullName: string | null;
  phoneNumber: string | null;
  emailAddress: string | null;
  date?: string | null;
  time?: string | null;
  [x: string]: any;
}


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
  const location = useLocation();
  const { state: { data: { path } } = {} } = location;
  const [showPickDateModel, setShowPickDateModel] = useState<boolean>(false);
  const [showPickTimeModel, setShowPickTimeModel] = useState<boolean | null>(null);
  const [selectedDate, setselectedDate] = React.useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>();
  const [formError, setFormError] = useState<any>({});
  const [formData, setFormData] = useState<BaseForm>({ fullName: "", phoneNumber: "", emailAddress: "", date: "", time: "" });


  // We need to manage height base on the clicked the button
  const dateModelRef = useRef(null);
  const timeModelRef = useRef(null);

  useOnClickOutside(timeModelRef, () => setShowPickTimeModel(false))
  useOnClickOutside(dateModelRef, () => setShowPickDateModel(false));

  const confirmBookingOrCallHanlder = () => {
    // Base on differet location we need to handle the validation 
    // In booking we have two extra model, date and time
    setFormError({});
    const catchError: any = {};

    let selectedModel = baseExportModel;

    if (path === componentEnum.bookAnAppointment) {
      selectedModel = bookAnAppointmentModel;
    }



    console.log(selectedModel)
    selectedModel.map((field, i) => {

      if (!field.regrex.test(formData[field.name])) {
        const { name } = field;
        catchError[name] = `${camelCaseToNormal(name, true)} is required `;
      }
    });
    setFormError(catchError);
  }

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  console.log(formError,)


  return (
    <DefaultTemplate rightIcon={avatarEl()}>
      {showPickTimeModel && <SelectTime
        setShowModel={setShowPickTimeModel}
        value={selectedTime}
        setValue={setSelectedTime}
        ref={timeModelRef}
      />}
      {showPickDateModel && <SelectDate
        setShowModel={setShowPickDateModel}
        value={selectedDate}
        setValue={setselectedDate}
        ref={dateModelRef}
      />
      }
      {/* <BookingConfirmation/> */}
      {/* <RediectionConfirmation/> */}
      <div className={styles.appointments}>
        <div className={styles.row}>
          <div className={styles.title}>Marketing Conference</div>
          <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and
            typesetting  industry.</div>
        </div>
        <div className={styles.row}>
          {/* <Input label='Full Name' size="small"/> */}
          <TextField
            label='Full Name'
            id='full-name'
            value={formData.fullName}
            onChange={onChangeHandler}
            name='fullName'
            error={!!formError?.fullName}
            helpText={formError.fullName}
          />

          <TextField
            label='Phone Number'
            id='phone-number'
            value={formData.phoneNumber}
            onChange={onChangeHandler}
            name='phoneNumber'
            error={!!formError?.phoneNumber}
            helpText={formError.phoneNumber}
          />
          <TextField label='Email Address' id='email-address'
            value={formData.emailAddress} onChange={onChangeHandler} name='emailAddress'
            error={!!formError?.emailAddress}
            helpText={formError.emailAddress} />

          {path === componentEnum.bookAnAppointment && <>
            <div className={styles.button__row}>
              <Button text='Pick date' variant='secondary' onClick={() => setShowPickDateModel(true)} />
              {!!formError.date && <HelpText text={formError.date}/>}
            </div>
            <div className={styles.button__row}>
            <Button text='Pick available time' variant='secondary' onClick={() => setShowPickTimeModel(true)} />
            {!!formError.time && <HelpText text={formError.time}/>}
            </div>
          </>}
        </div>

        <div className={styles.row}>
          <Button text='Confirm' variant='primary' onClick={confirmBookingOrCallHanlder} />
          <Button text='Cancel' variant='secondary' />
        </div>

      </div>
    </DefaultTemplate>
  )
}