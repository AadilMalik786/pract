import React, { useState } from "react";
const ReverseInput=()=>{
    const [input ,setInput]= useState("");

    const HandleSubmit=(e)=>{
        e.preventDefault();
        const word =input.split("").reverse().join("");
        setInput(word);
// console.log(word);
    }
    return(
        <>
            <form action="" onSubmit={HandleSubmit}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button>submit</button>
            </form>
        </>
    )
}
export default ReverseInput;