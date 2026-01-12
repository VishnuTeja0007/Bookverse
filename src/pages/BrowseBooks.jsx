import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import Sidebar from "../components/SideBar";
const BrowseBooks = () => {
  const { catagory } = useParams();
    console.log(catagory);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <BookList catagory={catagory || "All"} />
      </div>
    </div>
  );
};

export default BrowseBooks;
