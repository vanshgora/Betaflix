import { configureStore } from "@reduxjs/toolkit";
import sgPageSlice from "./sg-page-slice";


let store = configureStore({
    reducer: {
        sgPage: sgPageSlice.reducer,
    }
});

export default store;