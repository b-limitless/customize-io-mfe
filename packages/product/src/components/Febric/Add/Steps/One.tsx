import React from 'react'
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "../add-febric.module.scss";
import { excellence, warmth } from '../../../../config/febric';
import { commonFebricStepType } from '../../types/febrics';




export default function StepOne({ onChangeHandler, febric, errors, setErrors }: commonFebricStepType) {

    const nextStepHandler = () => {
        setErrors({});
        
        if(febric.title !== "") {
            setErrors({...errors, title: "Title field is required"});
        }
    }

    return (
        <div className={`${styles.row} ${styles.childrens}`}>
            <div className={styles.form__row}>
                <Input
                    label="Title"
                    id="title"
                    value={febric.title ?? ""}
                    type="text"
                    name="title"

                    error={errors.title ? true : false}
                    helperText={errors.title ? "Incorrect entry." : false} 
                    onChange={onChangeHandler}
                />
                <Input
                    label="Price"
                    id="price"
                    defaultValue=""
                    type="number"
                    name="price"
                    onChange={onChangeHandler}

                // error={true}
                // helperText="Incorrect entry."
                />
            </div>

            <div className={styles.form__row}>
                <Input
                    label="Delivery time(days)"
                    id="delivery-time"
                    value={febric.deliveryTime ?? 0}
                    type="number"
                    name="deliveryTime"
                    onChange={onChangeHandler}
                //  error={true}
                // helperText="Incorrect entry."
                />
                <Select options={excellence}
                    value={febric.excellence ?? 0}
                    label={"Excellence"}
                    name="excellence"
                    onChange={onChangeHandler}
                />

                <Select options={warmth}
                    value={febric.warmth ?? ""}
                    label={"Warmth"}
                    name="warmth"
                    onChange={onChangeHandler}
                />
            </div>

        </div>
    )
}