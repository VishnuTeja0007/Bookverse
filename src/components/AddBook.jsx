import { useState } from "react";
import { BookOpen, User, Image, FileText, Plus, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";
import booksData from "../utils/BooksData";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id:"",
    title: "",
    rating:"",
    author: "",
    description: "",
    category: "",
    image: "",
    authorDescription: "",
    storyDescription: "",
    gainFromBook: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!book.title.trim()) newErrors.title = "Title is required";
    if (!book.author.trim()) newErrors.author = "Author is required";
    if (!book.category) newErrors.category = "Category is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(
      addBook({
        ...book,
        id: Date.now(), // Use timestamp for unique ID
        rating: parseFloat(book.rating) || 0,
        detailedDescription: {
          story: book.storyDescription || "No story description available.",
          authorBio: book.authorDescription || "No author description available.",
          excitingContext: book.gainFromBook || "No additional information available."
        }
      })
    );

    setIsSubmitted(true);

    setTimeout(() => {
      setBook({
        id:"",
        title: "",
        rating:"",
        author: "",
        description: "",
        category: "",
        image: "",
        authorDescription: "",
        storyDescription: "",
        gainFromBook: "",
      });
      setIsSubmitted(false);
      navigate("/books");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Add New Book</h1>
          <p className="text-gray-600">Share your favorite reads with the community</p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 h-2"></div>

          <form onSubmit={handleSubmit} className="p-8">

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <span className="text-green-800 font-medium">
                  ✅ Book added successfully!
                </span>
              </div>
            )}

            {/* Title */}
            <InputField
              label="Book Title"
              name="title"
              value={book.title}
              onChange={handleChange}
              error={errors.title}
              placeholder="Enter the book title..."
              icon={<BookOpen className="w-5 h-5 text-gray-400" />}
            />
            {/* Title */}
            <InputField
              label="Book Rating"
              name="rating"
              value={book.rating}
              onChange={handleChange}
              error={errors.rating}
              placeholder="Enter the book rating..."
              icon={<BookOpen className="w-5 h-5 text-gray-400" />}
            />


            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={book.category}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 ${
                  errors.category
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <option value="">Select Category</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science">Science</option>
                <option value="philosophy">Philosophy</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
              )}
            </div>

            {/* Author */}
            <InputField
              label="Author"
              name="author"
              value={book.author}
              onChange={handleChange}
              error={errors.author}
              placeholder="Enter the author name..."
              icon={<User className="w-5 h-5 text-gray-400" />}
            />

            {/* Image URL */}
            <InputField
              label="Cover Image URL"
              name="image"
              value={book.image}
              onChange={handleChange}
              placeholder="https://example.com/book-cover.jpg"
              icon={<Image className="w-5 h-5 text-gray-400" />}
            />

            {/* Preview */}
            {book.image && (
              <img
                src={book.image}
                alt="Preview"
                className="h-40 mx-auto rounded-lg shadow-md mb-6"
              />
            )}

            {/* Textareas */}
            <Textarea 
              label="Brief Description" 
              name="description" 
              value={book.description} 
              onChange={handleChange} 
              placeholder="Write a brief description of the book..."
            />
            <Textarea 
              label="Story Description" 
              name="storyDescription" 
              value={book.storyDescription} 
              onChange={handleChange}
              placeholder="Describe the story, plot, and main events..."
            />
            <Textarea 
              label="What You Gain" 
              name="gainFromBook" 
              value={book.gainFromBook} 
              onChange={handleChange}
              placeholder="What will readers learn or gain from this book?"
            />
            <Textarea 
              label="Author Description" 
              name="authorDescription" 
              value={book.authorDescription} 
              onChange={handleChange}
              placeholder="Tell us about the author's background and expertise..."
            />

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                <ArrowLeft className="inline w-4 h-4 mr-2" />
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition ${
                  isSubmitted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                }`}
              >
                <Plus className="inline w-4 h-4 mr-2" />
                Add Book
              </button>
            </div>

          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>
      </div>
    </div>
  );
};

/* 🔹 Reusable Components */

const InputField = ({ label, name, value, onChange, error, icon, placeholder }) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label} {error && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center">{icon}</div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 ${
          error ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
        }`}
      />
    </div>
    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
);

export default AddBook;
