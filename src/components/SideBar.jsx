import { NavLink } from "react-router-dom";

const categories = ["All", "Fiction", "Non-Fiction", "Science", "Philosophy"];

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 border-b border-b-gray-200 md:border-b-0 md:border-r-2 md:border-r-gray-200 p-4 md:p-6 h-auto flex md:block">
      <div className="w-full">
        <h2 className="font-bold text-sm mb-3 md:mb-4">Categories</h2>

        <ul className="flex md:block flex-wrap gap-2 md:space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <NavLink
                to={cat === "All" ? "/books" : `/books/${cat.toLowerCase()}`}
                className={({ isActive }) =>
                  `inline-flex text-lg px-3 py-2 rounded ${
                    isActive ? "bg-teal-600 text-white" : "hover:bg-gray-100"
                  }`
                }
                end
              >
                {cat}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={`/books/added-books`}
              className={({ isActive }) =>
                `inline-flex text-lg px-3 py-2 rounded ${
                  isActive ? "bg-teal-600 text-white" : "hover:bg-gray-100"
                }`
              }
              end
            >
              Added Books
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
