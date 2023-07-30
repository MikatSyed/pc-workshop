import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import pcBuildersReducer from "./features/PcBuildSlice";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, pcBuildersReducer);

export const store = configureStore({
    reducer: {
        pcBuilder: persistedReducer,
    },
});

export const persistor = persistStore(store);

