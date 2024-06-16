import React from "react";
import { useState } from "react";
import { useReducer } from "react";
const Reduces=()=>{
const [inc,setInc]=useState(0);

const increament=()=>{
  setInc(inc+1);
}
const decreament=()=>{
  setInc(inc-1)
}

  return (
    <>
    <div>{inc}</div>
   
    
      <div onClick={increament}
        className="inccontainer"
       
        style={{ fontSize: "25px" }}
      >
        +
      </div>
      <div onClick={decreament}
        className="deccontainer"
        style={{ fontSize: "25px" }}
        >
        -
      </div>
  
    </>
  );
};
export default Reduces;

