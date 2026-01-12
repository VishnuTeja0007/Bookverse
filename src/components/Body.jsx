import React, { useState } from 'react'
import BookList from './BookList'

const Body = () => {
    const [catagory,setCategory]=useState("All")
    return (
        <div className="relative flex flex-col items-center md:items-center justify-center 
    mt-6 md:mt-10 text-sm 
    px-4 md:px-10 lg:px-16 xl:px-24 
    text-gray-800">

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-semibold 
      max-w-full md:max-w-4xl 
      text-center md:text-center 
      mt-4 leading-tight">

                Discover your next favorite
                <span className="relative bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent mx-2">
                    book
                    <div className="absolute bottom-0 left-0 w-full scale-110">
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient_arc.svg"
                            alt="gradient"
                        />
                    </div>
                </span>
                with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    BookVerse
                </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-center md:text-center text-base my-7 text-gray-600">
                BookVerse is a modern online library where you can explore books by category,
                search by author or title, and manage your personal collection with ease.
            </p>

          <div className='text-2xl font-bold'>
            Exlore by Categories 
          </div>
          <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
        <button type="button" onClick={()=>{setCategory("Fiction")}} className='rounded-2xl hover:bg-teal-500 hover:text-white bg-teal-400 text-black font-semibold px-4 py-2'>Fiction</button>
        <button type="button" onClick={()=>{setCategory("Non-Fiction")}} className='rounded-2xl hover:bg-teal-500 hover:text-white bg-teal-400 text-black font-semibold px-4 py-2'>Non - Fiction</button>
        <button type="button" onClick={()=>{setCategory("Philosophy")}} className='rounded-2xl hover:bg-teal-500 hover:text-white bg-teal-400 text-black font-semibold px-4 py-2'>Science</button>
        <button type="button" onClick={()=>{setCategory("Science")}} className='rounded-2xl hover:bg-teal-500 hover:text-white bg-teal-400 text-black font-semibold px-4 py-2'>Philosophy</button>
        <button type="button" onClick={()=>{setCategory("All")}} className='rounded-2xl hover:bg-teal-500 hover:text-white bg-teal-400 text-black font-semibold px-4 py-2'>All</button>
          
          </div >
          <div className=' w-screen flex flex-row items-center justify-center p-10'>

          <BookList catagory={catagory} size={10}/>
          </div>
        </div>
       
        

    )
}

export default Body
