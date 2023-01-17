import { configureStore } from "@reduxjs/toolkit";
import slideReducer from '../features/slideSlice'



export const store = configureStore({
    reducer: {
       slides: slideReducer,
    },
})



