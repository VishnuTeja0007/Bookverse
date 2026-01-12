import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDesc from './components/BookDesc.jsx'  
import Error from './components/Error.jsx'
import booksData from './utils/BooksData'
import AddBook from './components/AddBook.jsx'
import AddedBooks from './pages/AddedBooks.jsx'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error></Error>,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/books",
        element: <BrowseBooks />,
        errorElement:<Error></Error>,
      },
      {
        path: "/books/:catagory",
        element: <BrowseBooks />,
        errorElement:<Error></Error>,
      },{
        path: "/books/added-books",
        element: <AddedBooks />,
        errorElement:<Error></Error>,
      },
      {
        path: "/books/:catagory/:id",
        element: <BookDesc data={booksData} />,
        errorElement:<Error></Error>,
        },
      {
        path: "/add-book",
        element: <AddBook></AddBook>,
        errorElement:<Error></Error>,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)