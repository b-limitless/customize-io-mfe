import React from 'react';
import Model from '../Model/Model';
import styles from './select-time.module.scss';
import DateCalendarValue from '../../common/Calendar';
import { Props } from './selected-date.types';

export default function SelectDate({ setShowModel, value, setValue }: Props) {
  return (
    <Model ref={null}>
      <DateCalendarValue
        setShowModel={setShowModel}
        value={value}
        setValue={setValue}
      />
    </Model>
  )
}