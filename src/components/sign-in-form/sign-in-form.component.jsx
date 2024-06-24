import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInAuthUserWithEmailAndPassword
} from "../../helpers/firebase/firebase.helper";

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // Show Google Login Popup Window
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch(e) {
      console.log(e.message);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      if (response.user.accessToken) { 
        resetFormFields();
      }
    } catch(e) {
      console.log(e.message)
      if (e.code === 'auth/invalid-credential') {
        alert(`Wrong email or password. Please check and try again.`)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>

          <Button type='button' buttonClass='google' onClick={signInWithGoogle}>Google Sign In</Button>   
        </div>
      </form>
    </div>
  );
}

export default SignInForm;