import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { version } from "react";

const persistConfig = {
    key: "root",
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        cart: persistedReducer
    }
})

export const persistor = persistStore(store)
