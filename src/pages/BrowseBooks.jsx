import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import booksData from "../utils/BooksData";
import { Link } from "react-router-dom"

const BrowseBooks = () => {
  const [addedBooks, setAddedBooks] = useState([])
  const books = useSelector((state) => { return state.books.addedBooks })
  useEffect(() => {
    function callBooks() {
      setAddedBooks(books)

    }
    callBooks()

  }, [books])
  const { catagory } = useParams();
  console.log(catagory);
  console.log(addedBooks)
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="">
          <h1 className="text-2xl font-semibold text-black text-left">Added Books </h1>
          {
            addedBooks.length > 0 ?
              <BookList data={addedBooks} /> :
              <div className="h-auto w-auto flex  flex-col gap-8 items-center justify-center text-red-700">
                <p className=" text-2xl"> No books added yet</p>
                <Link to="/add-book" className="rounded-xl bg-teal-400 text-black p-4 text-lg font-bold">Add Book</Link>
              </div>
          }
        </div>
<h1 className="text-2xl font-semibold text-black text-left">Normal Books </h1>
        <BookList catagory={catagory || "All"} data={booksData} />
      </div>
    </div>
  );
};

export default BrowseBooks;
