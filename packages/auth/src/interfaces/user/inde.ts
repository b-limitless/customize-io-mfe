export interface FormInterface {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement:boolean;
}
export interface FormState {
  submitting: boolean;
  form: FormInterface;
  submissionError: null | string;
  success: null | boolean;
  
}
