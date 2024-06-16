import React, { useState } from "react";

const CountryCity=()=>{

    const countries=[{name:"India",value:"In",cities:["Delhi","Mumbai"]},{name:"Bangladesh",value:"Bn",cities:["dhaka","mirpur"]},{name:"desh",value:"Bn",cities:["dhaka","mirpur"]}]
    const [country,setCountry] = useState();
    console.log(country); // it will throw an index of the countries.

    return(
        <>
        <select onChange={(e)=>setCountry(e.target.value)}>
            {
                countries.map((value,index)=><option key={index} value={index}>{value.name}</option>)
            }
        </select>

        <select >
            {
                countries[country] && 
                countries[country].cities.map((value,index)=><option key={index} value={index}>{value}</option>)
            }
        </select>
        </>
    )
}
export default CountryCity;