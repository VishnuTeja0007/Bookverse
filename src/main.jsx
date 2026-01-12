import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDesc from './components/BookDesc.jsx'
import booksData from './utils/BooksData'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:catagory",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:catagory/:id",
        element: <BookDesc data={booksData} />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)