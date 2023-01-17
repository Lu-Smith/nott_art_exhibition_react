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
         },
         goToSlide: (state, action) => {
            state.value = action.payload;
         }
},
    });

export const { changeSlide, goToSlide } = slideSlice.actions;

export default slideSlice.reducer;