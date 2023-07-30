import { configureStore } from "@reduxjs/toolkit";
import pcBuildersReducer from "./features/PcBuildSlice";

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuildersReducer,
    },
   
});

