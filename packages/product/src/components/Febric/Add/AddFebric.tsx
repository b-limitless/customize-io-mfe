import React, { useState } from "react";
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "./add-febric.module.scss";
import FormTemplate from "./FormTemplate";
import StepOne from "./Steps/One";
import StepTwo from "./Steps/Two";
import StepThree from "./Steps/Three";
import { addFebricType, addFebricSteps } from "../../../types&Enums/febric";
import StepFour from "./Steps/Four";
import StepFive from "./Steps/Five";
import StepSix from "./Steps/Six";


type Props = {}



export default function AddFebric({ }: Props) {
    const [step, setStep] = useState<addFebricType>(addFebricSteps.one);

    return (
        <FormTemplate>
            {/* <StepOne /> */}
            {/* <StepTwo/> */}
            {/* <StepThree/> */}
            {/* <StepFour/> */}
            {/* <StepFive/> */}
            <StepSix/>
        </FormTemplate>
    )
}