import React, { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
const PasswordEye=()=>{
    const [password,setPassword] = useState(true);

    const HandleClick=()=>{
        setPassword(!password);
    }
    return(
        <>
        <input type={password?"password":"text"} />
        
        {
            password?<Eye onClick={HandleClick}/>:<EyeOff onClick={HandleClick}/>
        }
        </>
    )
}
export default PasswordEye;