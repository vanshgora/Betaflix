import { createSlice } from "@reduxjs/toolkit";

let signUpAndInSlice = createSlice({
    name: "signUpNIn",
    initialState: {
        user: {
            emailId: null,
            P_no: null,
            userName: null,
            password: null
        },
        usersArr: [],
        credential: '',
        creType: 'email',
        isVaildcre : true,
    },
    reducers: {
        setCredential(state, action) {
            state.credential = action.payload;
        },
        checkInputType(state, action) {
            let numCheckVar = action.payload.split('').every(item => {
                switch (item) {
                    case '0':case '1':case '2':case '3':case '4':case '5':case '6':case '7':case '8':case '9':
                        return true;
                    default:
                        return false;
                };
            });
            if (action.payload.length === 10 && numCheckVar) {
                state.creType = 'number';
            } else {
                state.creType = 'email';
            }
        },
        setIsVaildCre(state){
            state.isVaildcre = !state.isVaildcre;
        }
    }
})

export const signUpNInActions = signUpAndInSlice.actions;

export default signUpAndInSlice;