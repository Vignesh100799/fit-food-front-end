import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchMeal = createAsyncThunk(
    "meal/fetchMeal",
    async () => {
        try {
            const response = await axios.get("/api/fooditem")
            return response.data

        } catch (error) {
            throw error.response.data
        }
    }
)
const initialState = {
    meal: [],
    loading :false,
    error : false,
    selectday : {}
}
const foodSlice = createSlice({
    name: "meal",
    initialState,
    reducers: {
        getMeal: (state, action) => {
            const { meal } = action.payload
            state.meal = [...state.meal, meal]
        },
        setSelectDay : (state,action)=>{
            state.selectday = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMeal.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchMeal.fulfilled, (state, action) => {
                state.error = false;
                state.meal = action.payload
                state.loading = false;
            })
            .addCase(fetchMeal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
})
export const {
    getMeal,
    setSelectDay
} = foodSlice.actions

export default foodSlice.reducer
