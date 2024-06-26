import React, { useState } from "react";
// import {auth} from "../firebase"
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error)=>{
            console.log(error);
        })
    }


    
    return(
        <>
        <div className="singin-container">
            <h1>Login</h1>
            <form action="" onSubmit={signIn}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password"placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
        
    
        </>
    )
}
export default Signin;