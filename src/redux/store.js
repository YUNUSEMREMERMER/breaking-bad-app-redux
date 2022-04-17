import { configureStore } from "@reduxjs/toolkit";
import charaktersSlice from "./charactersSlice"
import quotesSlice from "./quotesSlice"

export const store = configureStore({
    reducer:{
        characters: charaktersSlice,
        quotes: quotesSlice,
    }
});