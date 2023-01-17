import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

export const slideSlice = createSlice({
    name: "slides",
    initialState,
    reducers: {
         changeSlide: (state) => {
                state.value += 1;
         }
},
    });

export const { changeSlide } = slideSlice.actions;

export default slideSlice.reducer;