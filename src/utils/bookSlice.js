import {createSlice} from "@reduxjs/toolkit"

const bookSlice=createSlice({
    name:"userAddedBooks",
    initialState:{
        addedBooks:[]
    },
    reducers:{
        addBook:(state,action)=>{
            state.addedBooks.push(action.payload)
        }   
    }
})
export const {addBook} =bookSlice.actions
export default bookSlice.reducer