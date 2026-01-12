import React from "react";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddedBooks = () => {
  const [addedBooks, setAddedBooks] = useState([]);
  const books = useSelector((state) => state.books.addedBooks);

  // keep local list in sync with store
  useEffect(() => {
    setAddedBooks(books);
  }, [books]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {addedBooks.length > 0 ? (
          <BookList data={addedBooks} />
        ) : (
          <div className="flex flex-col gap-4">
            <p>No books added yet</p>
            <Link to="/add-book" className="text-teal-600 underline">
              Add Book
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedBooks;
