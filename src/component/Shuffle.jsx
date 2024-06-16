import React, { useState } from "react";
const Shuffle =()=>{
    const [input,setInput] = useState("")
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const word =input.split("").sort(()=>0.3-Math.random()).join("");
        console.log(word);
        setInput(word);
    }
    // const second = ["z","y","x","w"];
    // console.log(second.sort(()=>1)); it will consider that last value must be the greatest value and when it returns -1 then first element must be consider as smallest element

    return (
        <>
            <form action="" onSubmit={HandleSubmit}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button>submit</button>
            </form>
        </>
    )
}
export default Shuffle;
