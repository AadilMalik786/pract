import React from "react";
import "./index.css";
import { Task } from "../api/TaskStorage";
import { Tak } from "../api/TaskStorage";
// const initialstate={
//     count:0
// }

// const reducer=(state,action)=>{
// switch(action.type){
//     case "INCREAMENT":
//         return{count:state.count+1}

//         default: return false
// }
// }

// const ComponentA = () => {

//     const [state,dispatch] = useReducer(reducer,initialstate);

//     return (
//         <>
//           <div className="container" onClick={()=>dispatch({type:"INCREAMENT"})} >hell45123123o</div>
//           <div>{state.count}</div>
//         </>
//     );
// };
const ComponentA = () => {
  return (
    <>
      <section>
        <Task.Consumer>
          {(beta) => {
            return (
              <>
                <div>
                  my name is {beta.data} {beta.last}
                </div>
                <div> my clas is {beta.last}</div>
                <Tak.Consumer>
                  {(kate) => {
                    return <div>{kate} priya</div>;
                  }}
                </Tak.Consumer>
              </>
            );
          }}
        </Task.Consumer>
      </section>
    </>
  );
};
export default ComponentA;
