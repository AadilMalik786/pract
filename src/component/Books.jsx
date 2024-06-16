import React, { useEffect, useState } from "react";
const Books =()=>{
  const [book,setBook] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/books").then(response=>response.json())
    .then(data=>setBook(data))
    .catch(err=>console.log(err.message));
  },[])
  console.log(book);
    return(
        <>

        <h1>
          {book.map(books=>
            <li key={books.id}>
              {books.author}
              
              <p>{books.title}</p>

            </li>
            )}
            hello
        </h1>
        
        </>
    )
}
export default Books;