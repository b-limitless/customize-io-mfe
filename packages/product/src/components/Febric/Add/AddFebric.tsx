import React, { useEffect, useState } from "react";
import { addFebricSteps, addFebricType } from "../../../types&Enums/febric";
import {firstLetterUpperCase} from "@pasal/common-functions";
import FormTemplate from "./FormTemplate";
import StepFive from "./Steps/Five";
import StepFour from "./Steps/Four";
import StepOne from "./Steps/One";
import StepSeven from "./Steps/Seven";
import StepSix from "./Steps/Six";
import StepThree from "./Steps/Three";
import StepTwo from "./Steps/Two";
import { validDigit, validString } from "../../../config/regrex";


type Props = {}


const steps = {
    one: [
        {
            name: 'title',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'price',
            regrex: validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'deliveryTime',
            regrex: validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'excellence',
            regrex:  validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'warmth',
            regrex:  validString,
            errorMessage:  "",
            type: 'select'
        }


    ], 
    two: [
        {
            name: 'weight',
            regrex: '',
            errorMessage: '',
            type: 'number '
        },
        {
            name: 'season',
            regrex: '',
            errorMessage: '',
            type: 'text '
        }, 
        {
            name: 'type',
            regrex: '',
            errorMessage: '',
            type: 'text '
        }, 
        {
            name: 'threadType',
            regrex: '',
            errorMessage: '',
            type: 'text '
        }, 
        {
            name: 'brightness',
            regrex: '',
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'superShiny',
            regrex: '',
            errorMessage: '',
            type: 'text '
        }
    ]
}


export default function AddFebric({ }: Props) {
    const [step, setStep] = useState<addFebricType>(addFebricSteps.one);
    const [errors, setErrors] = useState<any>({});
    const [febric, setFebric] = useState<any>({title: "", warmth:""});
    const [moveToNextStep, setMoveToNextStep] = useState(false);

    console.log(febric)
    const nextStepHandler = (step: addFebricSteps) => {
        setErrors({});
        // You have to check here all validation 
        // Based on steps you can check the validation
        if (step === addFebricSteps.one) {
            // Get the validation
            const validation = steps[addFebricSteps.one];

            // console.log("validation", validation)
            // console.log("validation", validation);
            // Validation for f ew fields
            const catchError:any = {};

            validation.map((field, i) => {
                if(!field.regrex.test(febric[field.name])) {
                    const {name} = field;
                    catchError[name] = ` ${firstLetterUpperCase(name)} is required `;
                }
            });

            setErrors(catchError);
        }

        // if (step === addFebricSteps.two) {
            
        //     if (!febric.weight) {
        //         setErrors({ ...errors, weight: "Please enter the title" });
        //         return;

        //     }
        // }


        // if(Object.entries(errors).length !== 0) {
        //     return;
        // }

        // const getTheIndexOfStep = Object.keys(addFebricSteps).indexOf(step);
        // setStep(Object.values(addFebricSteps)[getTheIndexOfStep + 1]);
        setMoveToNextStep(true);

    }

    console.log("febric", febric)

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setFebric({ ...febric, [name]: value });
    }

    useEffect(() => {
        if (Object.entries(errors).length === 0 && moveToNextStep) {
            const getTheIndexOfStep = Object.keys(addFebricSteps).indexOf(step);
            setStep(Object.values(addFebricSteps)[getTheIndexOfStep + 1]);
            setMoveToNextStep(false);
        }
    }, [moveToNextStep, step, errors]);


    console.log("errors", errors);
    return (
        <FormTemplate step={step} setStep={setStep} nextStepHandler={nextStepHandler}>
            {step === addFebricSteps.one && <StepOne onChangeHandler={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors} />}
            {step === addFebricSteps.two && <StepTwo onChangeHandler={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors} />}
            {step === addFebricSteps.three && <StepThree />}
            {step === addFebricSteps.four && <StepFour />}
            {step === addFebricSteps.five && <StepFive />}
            {step === addFebricSteps.six && <StepSix />}
            {step === addFebricSteps.seven && <StepSeven />}
        </FormTemplate>
    )
}