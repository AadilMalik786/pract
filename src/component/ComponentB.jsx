import React from "react";
import { memo } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import ComponentC from "./ComponentC";
const ComponentB=React.memo(({children})=>{
    console.log("b");
    return(
        <>
       <div className="contentwrapper" style={{backgroundColor:"blue"}}>{children}</div>
        
        
        </>
    )
})
export default ComponentB;