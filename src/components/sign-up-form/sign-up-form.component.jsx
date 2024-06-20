import { useState } from "react";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <h1>Sign up with your email and your password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

        <label>Email</label>
        <input text='email' required onChange={handleChange} name='email' value={email} />

        <label>Password</label>
        <input text='password' required onChange={handleChange} name='password' value={password} />

        <label>Confirm Password</label>
        <input text='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;