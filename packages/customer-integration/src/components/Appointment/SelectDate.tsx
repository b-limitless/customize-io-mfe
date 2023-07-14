import React from 'react';
import Model from './Model';
import styles from './select-time.module.scss';
import DateCalendarValue from '../common/Calendar';

type Props = {}

export default function SelectDate({}: Props) {
  return (
    <Model>
       <DateCalendarValue/>
    </Model>
  )
}