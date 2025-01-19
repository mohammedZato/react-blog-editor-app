import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../Store/BlogSlice";

const store = configureStore({
    reducer: {
        blog: blogReducer
    }
});

export default store;