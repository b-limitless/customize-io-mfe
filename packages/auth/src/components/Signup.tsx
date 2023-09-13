import {
  Button,
  Checkbox,
  Input,
  InputAdornments,
} from "@pasal/cio-component-library"
import React, { useReducer } from "react";
import BackLeftIcon from "../assets/svg/back-left-icon.svg";
import Template from "../common/Template";
import SignupFeature from "./features/signup.feature";
import VerifyFeature from "./features/verify.feature";
import { FormInterface, FormState } from "../interfaces/user/inde";
import { camelCaseToNormal } from '@pasal/cio-component-library'
import { userModel } from "../model/user";

const initialFormErrorState = {
  fullName: null,
  email: null,
  password: null,
  confirmPassword: null,
  agreement: null,
}
const initialState: FormState = {
  submitting: false,
  form: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false
  },
  formHasError: true,
  formError: {
    ...initialFormErrorState
  },
  submissionError: null,
  success: null
}

function authReducer(state: FormState, action: any): FormState {
  switch (action.type) {
    case 'REGISTERING_USER':
      return { ...state, submitting: true };
    case 'USER_REGISTRATION_ERROR':
      return { ...state, submissionError: action.payload };
    case 'USER_REGISTRATION_SUCCESS':
      return { ...state, success: true };
    case 'UPDATE_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      }
    }
    case 'FORM_ERROR': {
      const { name, value, formHasError } = action.payload;
      return {
        ...state,
        formHasError,
        formError: {
          ...state.formError,
          [name]: value
        }
      }
    }
    case 'RESET_FORM_ERROR': {
      return {
        ...state,
        formError: {
          ...initialFormErrorState
        }
      }
    }
    default:
      return state;
  }
}



export default function Signup() {

  const [{ submitting, 
          form, 
          submissionError, 
          success, formError, 
          formHasError }, dispatch] = useReducer(authReducer, initialState);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({ type: 'UPDATE_FORM', payload: { name, value: e.target.type === 'checkbox' ? e.target.checked : value } });
  }

  const onMouseLeaveEventHandler = (name: keyof FormInterface, value: string) => {
    if (!userModel[name].test(value)) {
      dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name, value: `${camelCaseToNormal(name, true)} is required` } })
    } else {
      dispatch({ type: 'FORM_ERROR', payload: { name, value: null, formHasError: false } })
    }
  }

  const onSubmitHandler = () => {
    // Make sure that there is error 
    // if (formHasError) {
    //   return;
    // }

    // Agreement must be checked
    // if(!form.agreement) {
    //   dispatch({type: 'FORM_ERROR', payload: {name: 'agreement', value: 'Please accept agreement'}});
    //   return;
    // }

    // While submitting the form as well we need to validate all of the data

    Object.keys(form).forEach((key) => {

      const formKey = key as keyof FormInterface;
      const value = form[formKey] as string;

      if (!userModel[formKey].test(value)) {
        console.log(`${formKey} value ${value} is invalid`)
        dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name: formKey, value: `${camelCaseToNormal(formKey, true)} is required` } })
      }

      if (userModel[formKey].test(value)) {
        console.log(`${formKey} value ${value} is valid`)
        dispatch({ type: 'FORM_ERROR', payload: { formHasError: false, name: formKey, value: null } })
      }

    });
  }

  // console.log("formHasError", formHasError, formError)
  console.log('form', form)
  console.log('formHasError', formHasError);
  console.log('formError', formError)


  return (
    <Template>
      <div className="right col">
        <div className="group-nav">
          <div className="row navigate">
            <span className="ico-back">
              <span className="icon">
                <BackLeftIcon />
              </span>
              <div className="back">Back</div>
            </span>
            <span className="steps-info">
              <span className="step">STEP 01/03</span>
              <span className="info">Personal Info.</span>
            </span>
          </div>
        </div>
        {/* <div className="group-elements">
          <div className="row registration">
            <div className="title">Register Individual Account!</div>
            <div className="purpose">
              For the purpose of industry regulation, your details are required.
            </div>

            <div className="form">
              <Input
                label="Full name*"
                id="full-name"
                // defaultValue="Hello World"
                type="text"
                //  error={true}
                // helperText="Incorrect entry."
              />
              <Input
                label="Email address*"
                id="email-address"
                defaultValue=""
                type="email"
                //  error={true}
                // helperText="Incorrect entry."
              />
              <InputAdornments label="Password" />

              <InputAdornments label="Confirm password" />

              <div className="agreement">
                <Checkbox id="check-me" />
                <label htmlFor="check-me">I agree to terms & conditions</label>
              </div>

              <Button variant="primary" text="Register Account"></Button>
            </div>
          </div>
        </div> */}
        <SignupFeature
          onChangeHandler={onChangeHandler}
          onMouseLeaveEventHandler={onMouseLeaveEventHandler}
          form={form}
          formError={formError}
          onSubmitHandler={onSubmitHandler}
        />
        {/* <VerifyFeature/> */}
      </div>
    </Template>
  );
}
