import React, { useEffect, useState } from 'react'
import BookCards from '../Components/BookCards';

const OtherBooks = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data=> setBooks(data.slice(3,10))) //when we render the page then we call "http://localhost:5000/all-books" this api and we get all data in json format and we can see that data in console.
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks