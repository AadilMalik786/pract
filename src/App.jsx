import React from "react";
import { useEffect, useState } from "react";
// import TaskStorage from './api/TaskStorage'
// import TaskGenerator from './component/TaskGenerator'
// To select the countries while using datalist tag map method

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };


    return(
      <>
       <button
      className={isActive ? 'active' : ''}
      onClick={handleClick}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
      </>
    )
};

export default App;
