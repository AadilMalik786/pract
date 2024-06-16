// import React, { useState } from "react";
// // import {auth} from "../firebase"
// import {auth} from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const SignUp=()=>{
//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');

//     const signUp=(e)=>{
//         e.preventDefault();
//         createUserWithEmailAndPassword(auth,email,password)
//         .then((userCredential)=>{
//             console.log(userCredential);
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }
//     return(
//         <>
//         <div className="singin-container">
//             <h1>Signup</h1>
//             <form action="" onSubmit={signUp}>
//                 <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//                 <input type="password"placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//                 <button type="submit">SignUp</button>
//             </form>
//         </div>
//         </>
//     )
// }
// export default SignUp;
// Signup.js
// Import necessary functions and classes
import { useState } from 'react';
import { RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth';
import { auth } from '../firebase';
// import { updatePassword } from 'firebase/auth';
const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code,setCode]= useState('');
  const [password, setPassword] = useState('');

 const sendOtp=()=>{
    const appvarifier = new RecaptchaVerifier(auth,'abc',{'size':'invisible'})
    signInWithPhoneNumber(auth,phoneNumber,appvarifier)
    .then(res=>{
        console.log(res);
        window.confirmationResult=res;
        console.log("otp send");
    }).catch((error)=>{
        console.log(error);
    })
 }
 const ConfirmOtp = () => {
    window.confirmationResult.confirm(code)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
 
 

  return (
    <>
    <h1>login with otp</h1>
    <input onChange={(e)=>setPhoneNumber(e.target.value)} />
    <div id="abc"></div>
    <button type='button' onClick={sendOtp}>sendOtp</button>

    <h2>confirm otp</h2>
    <input type="text" onChange={(e)=>setCode(e.target.value)}/>
    <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
    <button type='submit' onClick={ConfirmOtp}>submit otp</button>

    </>
    );
};

export default SignUp;
