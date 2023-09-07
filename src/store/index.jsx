import { configureStore } from "@reduxjs/toolkit";
import sgPageSlice from "./sg-page-slice";
import mainSlice from "./main-slice";
import movieSlice from "./movie-slice";
import signUpAndInSlice from "./Signup-n-in-slice";


let store = configureStore({
    reducer: {
        sgPage: sgPageSlice.reducer,
        main: mainSlice.reducer,
        movie: movieSlice.reducer,
        signUpNIn:signUpAndInSlice.reducer,
    }
});

export default store;