import React from "react";
import BookCard from "./BookCard";

// Renders books in a responsive grid with optional filtering/limit
const BookList = ({ catagory, size, data }) => {
  const source = Array.isArray(data) ? data : [];
  const filtered =
    catagory && catagory !== "All"
      ? source.filter((book) => book.catagory?.toLowerCase() === catagory.toLowerCase())
      : source;

  const limit = size ?? filtered.length;
  const visible = filtered.slice(0, limit);

  return (
    <div className="w-full flex justify-center p-2 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 place-items-center max-w-7xl">
        {visible.map((book) => (
          <BookCard key={book.id} books={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
