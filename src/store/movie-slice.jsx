import { createSlice } from "@reduxjs/toolkit";

let movieSlice = createSlice({
    name: 'movie',
    initialState: {movieObj: null},
    reducers: {
        setMovieObj(state,action) {
            state.movieObj = action.payload;
        }
    }
});

export const movieActions = movieSlice.actions;

export default movieSlice;