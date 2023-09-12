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
import { FormState } from "../interfaces/user/inde";

const initialFormErrorState = {
  fullName: null,
  email: null,
  password: null,
  confirmPassword: null,
  agreement: null
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
      const { name, value } = action.payload;
      return {
        ...state,
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

  const [{ submitting, form, submissionError, success, formError }, dispatch] = useReducer(authReducer, initialState);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FORM', payload: { name, value: e.target.type === 'checkbox' ? e.target.checked : value } });
  }

  const onMouseLeaveEventHandler = (name:string, value:string) => {
    // Intiall clear all the errors
    dispatch({type:  'RESET_FORM_ERROR'});

    if(value === '') {
      dispatch({type:  'FORM_ERROR', payload: {name, value: `${name} is required`}})
    }
  }


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
        />
        {/* <VerifyFeature/> */}
      </div>
    </Template>
  );
}
