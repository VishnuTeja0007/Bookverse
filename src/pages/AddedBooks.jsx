import React from 'react'
import Sidebar from '../components/SideBar'
import BookList from '../components/BookList'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const AddedBooks = () => {
    const [addedBooks,setAddedBooks]=useState([])
    const books=useSelector((state)=>{return state.books.addedBooks})
    useEffect(()=>{
        function callBooks() {
            setAddedBooks(books)
           
        }
        callBooks()

    },[books])
    // console.log("ass",addedBooks.length);
    return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {
            addedBooks.length>0?
            <BookList data={addedBooks}/>:
            <>
            <p>No books added yet</p>
            <Link to="/add-book">Add Book</Link>
            </>
        }
        {/* <BookList /> */}
      </div>
    </div>
  )
}

export default AddedBooks
