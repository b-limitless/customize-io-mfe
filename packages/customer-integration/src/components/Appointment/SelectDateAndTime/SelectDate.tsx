import React, { forwardRef } from 'react';
import Model from '../Model/Model';
import styles from './select-time.module.scss';
import DateCalendarValue from '../../common/Calendar';
import { Props } from './selected-date.types';

const SelectDate = forwardRef<HTMLDivElement, Props>(({ setShowModel, value, setValue }, ref) => {
  return (
    <Model ref={ref}>
      <DateCalendarValue
        setShowModel={setShowModel}
        value={value}
        setValue={setValue}
      />
    </Model>
  )
});
export default SelectDate;