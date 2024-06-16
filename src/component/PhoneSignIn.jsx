import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInWithEmailAndPassword(auth ,phoneNumber, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error', error);
      });
  };

  return (
    <>
      <h1>Login with Phone Number and Password</h1>
      <input
        type="tel"
        placeholder="Enter your phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={signIn}>
        Sign In
      </button>
    </>
  );
};

export default PhoneSignIn;
