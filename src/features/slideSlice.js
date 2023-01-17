import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

export const slideSlice = createSlice({
    name: "slides",
    initialState,
    reducers: {
         changeSlide: (state, action) => {
                if(state.id !== action.payload.id) {
                     state.id.push(action.payload.id)
                }
         }
},
    });

export const { changeSlide } = slideSlice.actions;

export default slideSlice.reducer;