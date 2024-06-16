import React from "react";
const CountrySelect=()=>{
    const data =[{name:"India"},{name:"Germany"}]
    return(
        <>
        <select >
            {/* <input type="text" /> */}
        {
            data.map((value)=><option >{value.name}</option>)
        }

        </select>
        </>
    )
}
export default CountrySelect;