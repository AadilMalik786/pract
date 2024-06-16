import React, { useEffect, useState } from "react";

const TableFilter = () => {
    const [data,setData] = useState([
        {id:23,name:"adil",color:"red"},
        {id:24,name:"prakash",color:"orange"},
        {id:25,name:"malik",color:"blue"},
    ]);
    const [filterData,setFilterData] = useState(data);
    const [search,setSearch] =useState("")

    const HandleSubmit=(e)=>{
        e.preventDefault();

        const filteredData=data.filter(value=>value.id.toString().includes(search));
        setFilterData(filteredData);
    }
    useEffect(()=>{
        const filteredData=data.filter(value=>value.id.toString().includes(search));
        setFilterData(filteredData);
        
    },[filterData])
    
    return (
        <>

        <table border="1px" cellPadding="20px" cellSpacing="10px">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>color</th>
                    </tr>
            {
                filterData.map((value,index)=>{
                   return <>
                    <tr index={value.id}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.color}</td>
                    </tr>
                    </>

                })
            }
        </table>
          <form action="" onSubmit={HandleSubmit}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button>submit</button>
          </form>
        </>
    );
}

export default TableFilter;
