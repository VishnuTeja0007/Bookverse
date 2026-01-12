import { useParams } from "react-router-dom";
import "./BookDesc.css"
import { FaStar, FaRegStar } from "react-icons/fa";

import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { removeItem } from "../utils/cartSlice";
// import { clearCart } from "../utils/cartSlice";
export default function BookDesc({ data }) {
    // const dispatch=useDispatch()
    // function handleAddItem(book){
    //     dispatch(addItem(book))
    // }
    // function handleRemoveItem(){
         // dispatch(removeItem())
    // }
    // function handleClearCart(){
    //         // dispatch(clearCart())
    //     }
    const renderStars = (rating) => {
    // 
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= Math.floor(rating) ? (
                    <FaStar key={i} className="text-yellow-500" />
                ) : (
                    <FaRegStar key={i} className="text-gray-400" />
                )
            );
        }
        return stars;
    };

    const { id } = useParams();
    const book = data.find((book) => book.id === Number(id));
    return (
        <article className="article-grid bg-gray-200 p-4 rounded-lg shadow-md">

            {/* IMAGE & AUTHOR */}
            <div className="image flex flex-col items-center justify-center gap-2">
                <img
                    src={"https://m.media-amazon.com/images/I/617lxveUjYL._SL1500_.jpg"}
                    alt={book.title}
                    className="w-[200px] rounded-md shadow"
                />
                <p className="text-lg font-bold text-black">
                    <span className="font-bold">{book.title}</span>
                </p>
            </div>

            {/* DESCRIPTION */}
            <div className="description bg-gray-100 flex flex-col gap-4 p-4 rounded-md">

                <h1 className="text-2xl font-bold text-center text-black">
                    {book.title}
                </h1>

                <div>
                    <h2 className="text-xl font-semibold text-black mb-1">
                        Description:
                    </h2>
                    <p className="text-gray-700">
                        {book.description}
                    </p>
                </div>

                <p className="text-lg font-semibold text-black">
                    Author: <span className="font-normal">{book.author}</span>
                </p>

                {/* RATING */}
                <div className="flex items-center gap-1">
                    {renderStars(4)}
                    <span className="ml-2 text-sm text-gray-600">
                        ({4})
                    </span>
                </div>

                {/* PRICE */}
                <p className="text-xl font-bold text-green-600">
                    ₹ {700}
                </p>
                {/* BUTTONS */}
                <div className="flex gap-4 justify-center mt-4">
                    
                        <button
                            type="button"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            // onClick={()=>{handleAddItem(book)}}
                        >
                            Add to Cart
                        </button>
                   
                    
                        <button
                            type="button"
                            // onClick={handleRemoveItem}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Buy Now
                        </button>
                        <button
                            type="button"
                            // onClick={handleClearCart}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Buy Now
                        </button>
                </div>

            </div>
        </article>
    );
}