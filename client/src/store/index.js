import {configureStore} from "@reduxjs/toolkit";
import winesReducer from "./winesSlice";

export default configureStore({
    reducer: {
        wines: winesReducer,
    }
});