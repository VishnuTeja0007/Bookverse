import React from 'react'

import BookCard from './BookCard'
const BookList = ({ catagory, size, data }) => {
  if(catagory){
    const filteredBooks = catagory === "All" 
    ? data
    :data.filter((book) => book.catagory.toLowerCase() === catagory.toLowerCase());
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
}
 else{
    const filteredBooks = data
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
 }
 
};

export default BookList
