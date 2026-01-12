import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import BookList from "../components/BookList";
import booksData from "../utils/BooksData";
import { Search } from "lucide-react";

const BrowseBooks = () => {
  const { catagory } = useParams();
  const [search, setSearch] = useState("");
  const [addedBooks, setAddedBooks] = useState([]);
  const addedFromStore = useSelector((state) => state.books.addedBooks);

  // mirror store changes locally for display
  useEffect(() => {
    setAddedBooks(addedFromStore);
  }, [addedFromStore]);

  // lightweight search over title and author
  const matchesQuery = (book) =>
    [book.title, book.author]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(search.toLowerCase()));

  const filteredAdded = useMemo(
    () => (search ? addedBooks.filter(matchesQuery) : addedBooks),
    [addedBooks, search]
  );

  const filteredCatalog = useMemo(
    () =>
      (search
        ? booksData.filter(matchesQuery)
        : booksData).filter((book) =>
          catagory && catagory !== "All"
            ? book.catagory?.toLowerCase() === catagory.toLowerCase()
            : true
        ),
    [catagory, search]
  );

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6">
        <div className="mr-auto ml-auto mb-5 flex w-full md:w-[70%] items-center justify-center gap-2 relative">
          <input
            type="text"
            className="w-full h-[50px] p-4 md:p-6 rounded-full border border-teal-600 text-lg md:text-xl font-semibold"
            placeholder="Search by Author or Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="h-[25px] font-extrabold w-[25px] absolute right-3">
            <Search />
          </span>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-black text-left">Added Books</h1>
          {filteredAdded.length > 0 ? (
            <BookList data={filteredAdded} />
          ) : (
            <div className="h-auto w-auto flex flex-col gap-8 items-center justify-center text-red-700">
              <p className="text-2xl">No books found</p>
              <Link to="/add-book" className="rounded-xl bg-teal-400 text-black p-4 text-lg font-bold">
                Add Book
              </Link>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-semibold text-black text-left mt-8">Normal Books</h1>
        {filteredCatalog.length > 0 ? (
          <BookList catagory={catagory || "All"} data={filteredCatalog} />
        ) : (
          <div className="h-auto w-auto flex flex-col gap-4 items-center justify-center text-red-700">
            <p className="text-xl">No books found</p>
            <p className="text-sm text-gray-600">Try a different search or clear the filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
