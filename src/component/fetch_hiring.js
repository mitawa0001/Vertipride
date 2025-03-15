import React from 'react'
// import Comment from "./Comment.js";
import { useState, useEffect } from "react";


function Fetch_hiring() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
      getData();
  
      async function getData() {
        const response = await fetch(
          "https://www.anapioficeandfire.com/api/books"
        );
        const data = await response.json();
  
        setBooks(data);
      }
    }, []);

    
  return (
    <div className="App">
    {books && (
      <div className="books">
        {books.map((book, index) => (
          <div key={index}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Fetch_hiring