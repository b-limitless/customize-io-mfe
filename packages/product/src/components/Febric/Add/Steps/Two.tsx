import React from 'react'
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "../add-febric.module.scss";

type Props = {}

import { brightness, febricSeasons, febricTypes, superShiny, threadTypes } from '../../../../config/febric';


export default function StepTwo({ }: Props) {

    return (
        <div className={styles.row}>
            <div className={styles.form__row}>
                <Input
                    label="Weight(mg^2)"
                    id="weight"
                    defaultValue=""
                    type="number"
                    //  error={true}
                    // helperText="Incorrect entry."
                />
                <Select options={febricSeasons}
                    value={""}
                    label={"Season"}
                    onChange={() => { }}
                />

                <Select options={febricTypes}
                    value={""}
                    label={"Type"}
                    onChange={() => { }}
                />
            </div>

            <div className={styles.form__row}>
            <Select options={threadTypes}
                    value={""}
                    label={"Thread Type"}
                    onChange={() => { }}
                />
                <Select options={brightness}
                    value={""}
                    label={"Bringtness"}
                    onChange={() => { }}
                />

                <Select options={superShiny}
                    value={""}
                    label={"Super Shiny"}
                    onChange={() => { }}
                />
            </div>

        </div>
    )
}