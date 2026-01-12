import logo from "../assets/Logo.png"
export default function Footer() {
    return (
        <>
            <footer className=" w-screen flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-10 py-6 px-6 md:px-10lg:px-24 xl:px-15 text-xl text-black-500 bg-gradient-to-r from-gray-100 to-teal-500">
               <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">

  {/* Logo & Tagline */}
  <div>
    <img
      src={logo}
      alt="BookVerse Logo"
      className="w-[260px]"
    />
    
  </div>

  {/* Navigation */}
  <div>
    <p className="text-black font-semibold text-2xl">Navigation</p>
    <ul className="mt-2 space-y-2">
      <li>
        <a href="/" className="hover:text-indigo-600 transition">Home</a>
      </li>
      <li>
        <a href="/books/Fiction" className="hover:text-indigo-600 transition">Browse Books</a>
      </li>
      <li>
        <a href="/add-book" className="hover:text-indigo-600 transition">Add Book</a>
      </li>
    </ul>
  </div>

  {/* Categories */}
  <div>
    <p className="text-black font-semibold text-2xl">Categories</p>
    <ul className="mt-2 space-y-2">
      <li>
        <a href="/books/Fiction" className="hover:text-indigo-600 transition">Fiction</a>
      </li>
      <li>
        <a href="/books/Non-Fiction" className="hover:text-indigo-600 transition">Non-Fiction</a>
      </li>
      <li>
        <a href="/books/Sci-Fi" className="hover:text-indigo-600 transition">Sci-Fi</a>
      </li>
    </ul>
  </div>

  {/* Project Info */}
  <div>
    <p className="text-black font-semibold text-2xl">Project</p>
    <ul className="mt-2 space-y-2">
      <li>
        <span className="text-gray-600">Built with React & Redux</span>
      </li>
      <li>
        <span className="text-gray-600">Academic Project</span>
      </li>
      <li>
        <span className="text-gray-600">2026 © BookVerse</span>
      </li>
    </ul>
  </div>

</div>

            </footer>
        </>
    );
};