import React from 'react'
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "../add-febric.module.scss";
import { threadCounts, waterProof } from '../../../../config/febric';
type Props = {}

const warmthOptions = [{ name: 1, code: 1 }, { name: 2, code: 2 }]

export default function StepThree({ }: Props) {

    return (
        <div className={styles.row}>
            <div className={styles.form__row}>
                <Select options={threadCounts}
                    value={""}
                    label={"Thread Count"}
                    onChange={() => { }}
                />
                <Select options={warmthOptions}
                    value={""}
                    label={"Opacity"}
                    onChange={() => { }}
                />

                <Select options={waterProof}
                    value={""}
                    label={"Water Proof"}
                    onChange={() => { }}
                />

            </div>

        </div>
    )
}