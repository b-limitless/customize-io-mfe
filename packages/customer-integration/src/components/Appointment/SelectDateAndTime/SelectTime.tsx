import React from 'react';
import Model from '../Model/Model';
import styles from './select-time.module.scss';
import { Props } from './selected-date.types';



const SelectTime = React.forwardRef<HTMLDivElement, Props>(
       (
        {setShowModel, value, setValue}, ref) => {
  return (
    <Model ref={ref}>
        <>
        <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                
                <div className={styles.confirm}>
                    Confirm
                </div>
            </div>
            <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                {/* <div className={styles.confirm}>
                    Confirm
                </div> */}
            </div>
            <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                {/* <div className={styles.confirm}>
                    Confirm
                </div> */}
            </div>
            <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                {/* <div className={styles.confirm}>
                    Confirm
                </div> */}
            </div>
            <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                {/* <div className={styles.confirm}>
                    Confirm
                </div> */}
            </div>
            <div className={styles.item}>
                {/* If selected we need to show flex with two */}
                {/* Otherwise normal  */}
                
                <div className={styles.time}>
                        09:30 AM - 10:00 AM
                </div>
                {/* <div className={styles.confirm}>
                    Confirm
                </div> */}
            </div></>
    </Model>
  )
});

export default SelectTime;