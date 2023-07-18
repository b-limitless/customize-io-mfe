import React from 'react';
import Model from '../Model/Model';
import styles from './select-time.module.scss';
import { Props } from './selected-date.types';

type time = {
    start_time: string;
    end_time: string;
    mongoId?: string;
    id?: number;
}

type slots = {
    slot: time;
    [x: string]: any;
}

const RowTimeSlot = ({ slot, value, setValue, conformTimeSlotHandler }: slots) => {
    return <div className={styles.item} onClick={() => setValue(slot.mongoId)}>
        <div className={styles.time}>
            {`${slot.start_time} - ${slot.end_time}`}
        </div>
        {value === slot.mongoId && <div className={styles.confirm} onClick={conformTimeSlotHandler}>
            Confirm
        </div>
        }
    </div>
}

const SelectTime = React.forwardRef<HTMLDivElement, Props>(
    (
        { setShowModel, value, setValue, availableSlots, conformTimeSlotHandler }, ref) => {
        return (
            <Model ref={ref}>
                <>
                    {availableSlots.map((slot: time, i: number) => <RowTimeSlot setValue={setValue} key={`row-time-slot-${i}`} value={value} slot={slot} conformTimeSlotHandler={conformTimeSlotHandler}/>)}


                    {/* <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                        <div className={styles.confirm}>
                            Confirm
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.time}>
                            09:30 AM - 10:00 AM
                        </div>
                    </div> */}
                </>
            </Model>
        )
    });
export default SelectTime;