import React, { useContext } from "react";
import { Task } from "../api/TaskStorage";
const TaskGen=(props)=>{
    const {Click} = useContext(Task);
    return(<>
<div onClick={Click}>hello</div>
    </>)
}
export default TaskGen;