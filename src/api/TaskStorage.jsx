import React, { createContext} from "react";
const Task=createContext();
const TaskStorage=(props)=>{
  const Click=()=>{
    console.log("hello");
  }
  return(<>
    <Task.Provider value={{Click}}>
    {props.children}
    </Task.Provider>
  </>)
}
export default TaskStorage;
export {Task};