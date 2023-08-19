import { createSlice } from "@reduxjs/toolkit";

let mainSlice = createSlice({
    name: 'main',
    initialState: {data: []},
    reducers: {
        addData(state, action) {
            state.data.push(action.payload);
        }
    }
});

export const mainActions = mainSlice.actions;

export default mainSlice;