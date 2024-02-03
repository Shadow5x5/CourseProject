import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchWines = createAsyncThunk(
    "wines/fetchWines",
    async function (serverDataStorage, { isRejectedWithValue }) {
        try {
            const response = await axios.post(
                "http://localhost:3001/wine-catalog",
                {
                    param: serverDataStorage.searchValue,
                    selectedType: serverDataStorage.selectedType,
                }
            );
            console.log(1);
            if (response.status !== 200) {
                throw new Error("Server error!!!");
            }

            console.log(1);
            console.log(await response.data);
            const data = await response.data;
            return data;
        } catch (error) {
            return isRejectedWithValue(error.message);
        }
    }
);

const winesSlice = createSlice({
    name: "wines",
    initialState: {
        wines: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchWines.pending]: (state) => {
            state.status = "load";
            state.error = null;
        },
        [fetchWines.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.wines = action.payload;
        },
        [fetchWines.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
});

export default winesSlice.reducer;
