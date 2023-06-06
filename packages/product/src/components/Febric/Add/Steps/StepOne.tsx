import React from 'react'
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "../add-febric.module.scss";
type Props = {}

const warmthOptions = [{name: 1, code: 1}, {name: 2, code: 2}]

export default function StepOne({ }: Props) {

    return (
        <div className={styles.row}>
            <div className={styles.form__row}>
                <Input
                    label="Title"
                    id="title"
                    defaultValue=""
                    type="text"
                //  error={true}
                // helperText="Incorrect entry."
                />
                <Input
                    label="Price"
                    id="price"
                    defaultValue=""
                    type="text"
                //  error={true}
                // helperText="Incorrect entry."
                />
            </div>

            <div className={styles.form__row}>
                <Input
                    label="Delivery time(days)"
                    id="delivery-time"
                    defaultValue=""
                    type="number"
                //  error={true}
                // helperText="Incorrect entry."
                />
                <Select options={warmthOptions}
                value={""}
                label={"Excellence"}
                onChange={() => { }}
            />

                <Select options={warmthOptions}
                value={""}
                label={"Warmth"}
                onChange={() => { }}
            />
            </div>

        </div>
    )
}