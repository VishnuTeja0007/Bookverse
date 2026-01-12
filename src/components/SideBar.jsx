import { NavLink } from "react-router-dom";

const categories = ["All", "Fiction", "Non-Fiction", "Science", "Philosophy"];

const Sidebar = () => {
  return (
    <aside className="w-64 border-r p-6 h-auto">
      <h2 className="font-bold text-sm mb-4">Categories</h2>

      <ul className="space-y-3">
        {categories.map(cat => (
          <li key={cat}>
            <NavLink
              to={cat === "All" ? "/books" : `/books/${cat.toLowerCase()}`}
              className={({ isActive }) =>
                `block text-lg px-3 py-2 rounded ${
                  isActive ? "bg-teal-600 text-white" : "hover:bg-gray-100"
                }`
              }
             end >
              {cat}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
