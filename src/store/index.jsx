import { configureStore } from "@reduxjs/toolkit";
import sgPageSlice from "./sg-page-slice";
import mainSlice from "./main-slice";


let store = configureStore({
    reducer: {
        sgPage: sgPageSlice.reducer,
        main: mainSlice.reducer,
    }
});

export default store;