import React, { useState } from "react";
const Country = () => {
  const desh = [{name:"India"},{name:"Germany"}];
  const [data, setData] = useState(desh);
  return (
    <>
      <form action="">
        <input type="text" list="adil" />
          <datalist id="adil">
        {data.map(value => <option value={value.name}></option>
        )}
          </datalist>;
      </form>
    </>
  );
};
export default Country;
