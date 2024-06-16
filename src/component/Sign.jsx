import React, { useState } from "react";
import Login from "./Login";

const Sign =()=>{
    const [show,setShow] =useState(false)
    const [hide,setHide]= useState(true)

    const Handle=()=>{
        setShow(true);
        setHide(false);
    }

    return(
        <>
        {
            show ?<Login/> :<input type="text" />
        }
        {
            hide && <button onClick={Handle}>submit</button>
        }
        
    
        </>
    )
}
export default Sign;