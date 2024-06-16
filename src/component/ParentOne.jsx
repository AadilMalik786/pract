import React from "react";
import Parenttwo from "./Parenttwo";
const ParentOne =()=>{
    return(
        <>
        {/* <div style={{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",backgroundColor:"red"}}></div> */}
        
        <div className="parentfirst" style={{height:"800px",width:"800px",backgroundColor:"aqua",position:"absolute"}}>
       fg
            <div className="parentsecond" style={{height:"500px",width:"500px",backgroundColor:"orange",position:"absolute"}}>
                <Parenttwo/>
            </div>
           5+
        </div>
       
        </>
    )
}
export default ParentOne; 