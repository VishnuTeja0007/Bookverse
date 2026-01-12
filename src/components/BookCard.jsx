import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const BookCard = React.memo(({ books }) => {
      const renderStars = (rating) => { 
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= Math.floor(rating) ? (
                    <FaStar key={i} className="text-yellow-500" />
                ) : (
                    <FaRegStar key={i} className="text-gray-400" />
                )
            );
        }
        return stars;
    };
  return (
    <div className="h-full w-full rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:bg-gray-200 transition-all duration-300 flex flex-col overflow-hidden">

      {/* Image Section */}
      <div className=" p-4">
        <img
          src={books.image}
          alt={books.title}
          className="h-[220px] w-full object-contain rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {books.title}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {books.description}
        </p>

        {/* Author */}
        <p className="text-sm font-medium text-gray-500 mt-auto">
          — {books.author}
        </p>
        {/* RATING */}
                <div className="flex items-center text-lg justify-center gap-1">
                   
                    {renderStars(books.rating)}
                    <span className="ml-2 text-lg text-gray-600">
                        ({books.rating})
                    </span>
                </div>
        {/* Action Button */}
        <Link
          to={`/books/${books.catagory.toLowerCase()}/${books.id}`}
          className="mt-3 inline-block text-sm text-center rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
});

export default BookCard;
