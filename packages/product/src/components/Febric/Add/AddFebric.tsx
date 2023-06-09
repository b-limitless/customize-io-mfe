import React, { useState} from "react";
import { flushSync } from "react-dom";
import { addFebricSteps, addFebricType } from "../../../types&Enums/febric";
import FormTemplate from "./FormTemplate";
import StepFive from "./Steps/Five";
import StepFour from "./Steps/Four";
import StepOne from "./Steps/One";
import StepSeven from "./Steps/Seven";
import StepSix from "./Steps/Six";
import StepThree from "./Steps/Three";
import StepTwo from "./Steps/Two";

type Props = {}


export default function AddFebric({ }: Props) {
    const [step, setStep] = useState<addFebricType>(addFebricSteps.one);
    const [errors, setErrors] = useState<any>({});
    const [febric, setFebric] = useState<any>({});


    const nextStepHandler = (step:addFebricSteps) => {
        flushSync(() => {
            setErrors({});
        })
        // You have to check here all validation 
        // Based on steps you can check the validation
        if(step === addFebricSteps.one) {
            
            // Validation for few fields
            if(!febric.title) {
                setErrors({...errors, title: "Please enter the title"}); 
                return;

            } else {
                console.log("There was something", febric.title)
            }
        }

        if(step === addFebricSteps.two) {
            // Add valiation for other fields
        }

        console.log("errors", errors)
        if(Object.entries(errors).length !== 0) {
            return;
        }
        const getTheIndexOfStep = Object.keys(addFebricSteps).indexOf(step);
        setStep(Object.values(addFebricSteps)[getTheIndexOfStep + 1]);

    }

    const onChangeHandler = (e:any) => {
        const {name, value} = e.target;
        setFebric({...febric, [name]:value});
    }


    
    return (
        <FormTemplate step={step} setStep={setStep} nextStepHandler={nextStepHandler}>
            {step === addFebricSteps.one && <StepOne onChangeHandler ={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors}/> }
            {step === addFebricSteps.two && <StepTwo onChangeHandler ={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors}/> }
            {step === addFebricSteps.three && <StepThree/> }
            {step === addFebricSteps.four && <StepFour/> }
            {step === addFebricSteps.five && <StepFive/> }
            {step === addFebricSteps.six && <StepSix/> }
            {step === addFebricSteps.seven && <StepSeven/>}
        </FormTemplate>
    )
}