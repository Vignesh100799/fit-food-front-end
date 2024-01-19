import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,

};
const userSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {

        loginSuccess: (state, action) => {


            state.currentUser = action.payload.userData

        },
        updateSuccess: (state, action) => {

            state.currentUser = action.payload.userData
        },
        logOutSuccess : (state)=>{
            state.currentUser = null
        }

    }
})
export const {

    loginSuccess,
    updateSuccess,
    logOutSuccess

} = userSlice.actions;

export default userSlice.reducer