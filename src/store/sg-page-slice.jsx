import { createSlice } from "@reduxjs/toolkit";

const sgPageSlice = createSlice({
    name: 'sgpage',
    initialState:{step: 1},
    reducers: {
        stepincrement(state) {
            state.step++;
        },
        setStep1(state) {
            state.step = 1;
        }
    }
});

export const sgPageActions = sgPageSlice.actions;

export default sgPageSlice;