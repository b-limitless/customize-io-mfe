import React, {useRef} from 'react'; 
import {
    Button,
    Checkbox,
    Input,
    InputAdornments,
} from "@pasal/cio-component-library"

type Props = {}

const validLength = {
    inputProps: {
        maxLength: 1,
        minLength: 1,
        pattern: /[0-9]{1}/,
    }


}


const YourComponent: React.FC = () => {
  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value;

    // Check if the input is not empty and the value is a digit
    if (value !== '' && /^\d$/.test(value)) {
      // Automatically focus on the next input field if available
      if (index < inputRefs.length - 1 && inputRefs[index + 1].current) {
        // @ts-ignore
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      // Delete the current data in the field
     // event.currentTarget.value = '';
      // @ts-ignore
      //inputRefs[index].current.focus();
      console.log('event.currentTarget.value',inputRefs[index].current.value)
      // Move focus to the previous input field when Backspace is pressed
      if (index > 0 && inputRefs[index - 1].current) {
        // @ts-ignore
        inputRefs[index].current.value = ''
        // @ts-ignore
        
        inputRefs[index - 1].current.focus();
      }
    }
  };
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData.getData('text');

    // Remove non-digit characters from the pasted text
    const digits = pastedText.replace(/\D/g, '').split('');

    // Distribute each digit to the corresponding input field
    digits.forEach((digit, index) => {
      if (inputRefs[index] && inputRefs[index].current) {
        // @ts-ignore
        inputRefs[index].current.value = digit;
        // @ts-ignore
        inputRefs[index].current.focus();
      }
    });

    event.preventDefault(); // Prevent the default paste behavior
  };

  return (
    <div>
      {inputRefs.map((inputRef, index) => (
        <Input
          key={index}
          inputRef={inputRef}
          onChange={(e:any) => handleInputChange(e, index)}
          onPaste={handlePaste}
          onKeyDown={(e:any) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
          }}
        />
      ))}
    </div>
  );
};


  

export default function VerifyFeature({ }: Props) {
    return (
        // <div className="group-elements">
        //     <div className="row registration">
        //         <div className="title">Please enter verification code</div>
        //         <div className="purpose">
        //             Please check you inbox or spam, We have sent you en email for the verification.
        //         </div>

        //         <div className="vrification-form">
        //             <Input {...validLength}/>
        //             <Input {...validLength}/>
        //             <Input {...validLength}/>
        //             <Input {...validLength}/>
        //             <Input {...validLength}/>

        //         </div>

        //         <div className="form">
        //             <Button variant="primary" text="Verify"></Button>
        //         </div>
        //     </div>
        // </div>
        <YourComponent/>
    )
}