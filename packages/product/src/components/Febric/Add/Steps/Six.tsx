import React, { useState } from 'react'
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "../add-febric.module.scss";
import { febricTypes } from '../../../../config/febric';
import { SelectChangeEvent } from '@mui/material/Select';
import { svgCDNAssets } from '../../../../config/assets';
type Props = {}

const warmthOptions = [{ name: 1, code: 1 }, { name: 2, code: 2 }];

interface CompositionInterface {
    name: string;
    code: string;
    persantage?:number;
}

export default function StepSix({ }: Props) {
    const [compositions, setComposition] = useState<CompositionInterface[]>([]);

    // Each component row structor would be like this
    const mock = { id: 1, name: "cotton", persentage: "10%" };

    const compositionOnChangeHandler = (event: SelectChangeEvent) => {
        // Check that composition does not exists in compositions
        const {value} = event.target;
        const compositionIsSelected = compositions.filter((composition) => composition.code === value);

        if(compositionIsSelected.length > 0) {
            return;
        }

        // Get the row based on its code
        const getComposition:any = febricTypes.filter((composition) => composition.code === value);
        // Or add this object to the setComposition
        // console.log(getComposition)
        setComposition([...compositions, ...getComposition]);

        // console.log(event.target.value);
    }


    console.log(compositions)

    return (
        <div className={styles.row}>
            <div className={styles.form__row}>
                <Select options={febricTypes}
                    value={""}
                    label={"Select composition"}
                    onChange={compositionOnChangeHandler}
                />

            </div>

            <div className={styles.form__row}>
                <div className="styles item">
                    <div className="styles col">
                        Cotton
                    </div>
                    <div className="styles psersantage">
                        <Input
                            label="%"
                            id="composition%"
                            defaultValue=""
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 100 } }}
                            
                        //  error={true}
                        // helperText="Incorrect entry."
                        />
                    </div>
                    <div className="styles remove__composition">
                        <img src = {svgCDNAssets.delete} />
                    </div>
                </div>
            </div>

        </div>
    )
}