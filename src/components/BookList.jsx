import React from 'react'
import booksData from '../utils/BooksData'
import BookCard from './BookCard'
const BookList = ({ catagory, size }) => {
  // 1. Determine the source data based on category
  const filteredBooks = catagory === "All" 
    ? booksData 
    : booksData.filter((book) => book.category.toLowerCase() === catagory.toLowerCase());

  // 2. Determine the limit: use 'size' if provided, otherwise show everything 
  // (or 6 if it's the "All" default, based on your previous logic)
  const limit = size ? size : (catagory === "All" ? 6 : filteredBooks.length);
    console.log(limit)
  return (
  <div className="w-full flex justify-center p-2 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 place-items-center max-w-7xl">
        {filteredBooks.slice(0, limit).map((book) => (
          <BookCard key={book.id} books={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList
