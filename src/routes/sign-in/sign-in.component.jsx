import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth 
} from '../../helpers/firebase/firebase.helper';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  // Redirect to Google Login Provider Page
  // Handle redirect to external site with firebase/auth library
  useEffect(() => { 
    const fetchAuth = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    fetchAuth();
    
  }, []); // on first componenet mount

  // Show Google Login Popup Window
  const logGoogleUserViaPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUserViaPopup}>Sign in with Google Popup</button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </div>
  );
}

export default SignIn;