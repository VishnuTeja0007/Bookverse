import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-gray-300 to-teal-500 transition-all">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="booksverse logo" height="auto" width="300px" />
      </Link>

      {/* Desktop Menu */}
      <ul className="text-black md:flex hidden text-lg items-center gap-10 font-semibold">
        <li>
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books/Fiction" className="hover:text-white/70 transition">
            Browse Books
          </Link>
        </li>
        <li>
          <Link to="/add-book" className="hover:text-white/70 transition">
            Add Book
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link
        to="/books/Fiction"
        className="bg-white font-bold text-gray-700  hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full md:flex items-center justify-center"
      >
        Explore Library
      </Link>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7h24M3 15h24M3 23h24" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col items-center justify-center space-y-4 text-white text-lg">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/books/Fiction" onClick={() => setMenuOpen(false)}>
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" onClick={() => setMenuOpen(false)}>
                Add Book
              </Link>
            </li>
          </ul>

          <Link
            to="/books/Fiction"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-gray-700 mt-6 mr-auto ml-auto  text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full flex items-center justify-center"
          >
            Explore Library
          </Link>
        </div>
      )}
    </nav>
  );
}
