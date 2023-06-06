import React from "react";
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "./add-febric.module.scss";
import FormTemplate from "./FormTemplate";
import StepOne from "./Steps/StepOne";


type Props = {}

export default function AddFebric({ }: Props) {
    return (
        <FormTemplate>
            <StepOne/>

        </FormTemplate>
    )
}