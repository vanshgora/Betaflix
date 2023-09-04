import { createSlice } from "@reduxjs/toolkit";

let mainSlice = createSlice({
    name: 'main',
    initialState: {data: []},
    reducers: {
        addData(state, action) {
            action.payload.results.forEach(item => {
                state.data.push(item);
            })
        }
    }
});

export const mainActions = mainSlice.actions;

export default mainSlice;