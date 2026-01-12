import { useState } from "react";
import { Star, BookOpen, User, TrendingUp, Heart, Share2, Bookmark } from "lucide-react";
import {useParams} from "react-router-dom"
// Mock data for demonstration
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import { useEffect } from "react";

const BookDesc = ({data}) => {
  const {id} = useParams();
  const [addedBooks,setAddedBooks]=useState([])
    const books=useSelector((state)=>{return state.books.addedBooks})
    useEffect(() => {
        setAddedBooks(books);
    }, [books]);

  const book = addedBooks.find((book) => book.id == id) || data.find((book) => book.id == id); 
    console.log(book)
    console.log(id)
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-8">The book you're looking for doesn't exist.</p>
          <Link 
            to="/books" 
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl text-lg mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="xxs:flex-col s:flex-row flex items-center justify-center gap-12 ">
          
          {/* Book Cover with Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition duration-500" />
              <div className="relative w-[300px] h-auto bg-white rounded-2xl shadow-2xl p-6">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-[300px] h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            
          </div>

          {/* Book Details */}
          <div className="flex flex-col items-center justify-center text-center h-auto gap:4">
            
            {/* Category Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                {book.category}
              </span>
            </div>

            {/* Title & Author */}
            <div className="space-y-3">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
                {book.title}
              </h1>
              <div className="flex items-center gap-2 justify-center text-gray-600">
                <p className="text-lg">by <span className="font-semibold text-center text-gray-800">{book.author}</span></p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-6 py-4 border-y border-gray-200">
              <div className="flex items-center gap-2">
                {renderStars(book.rating)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900">{book.rating}</span>
                <span className="text-sm text-gray-500">/5.0</span>
              </div>
            </div>

            {/* Description */}
            <div className="p-2">
              <p className="text-gray-700 text-lg p-4">
                {book.description}
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/books">
            <button className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Browse More
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            </Link>
            
          
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Story Overview */}
            <div className="bg-white rounded-2xl shadow-lg  p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">

                <h2 className="text-2xl font-bold text-gray-900">Story Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {book.detailedDescription.story}
              </p>
            </div>

            {/* Author Bio */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-2xl font-bold text-gray-900">About the Author</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {book.detailedDescription.authorBio}
              </p>
            </div>

            {/* Why Read */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-indigo-100">
              <div className="flex items-center gap-3 mb-5">
                
                <h2 className="text-2xl font-bold text-gray-900">Why You Should Read This</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {book.detailedDescription.excitingContext}
              </p>
            </div>
          </div>

          {/* Ratings Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-6">
              
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Ratings & Reviews</h2>

              {/* Overall Rating */}
              <div className="flex items-center justify-center gap-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    {book.rating}
                  </div>
                  <div className="flex justify-center mt-2">
                    {renderStars(book.rating)}
                  </div>
                </div>
              
              </div>

              

              {/* Review Button */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDesc;