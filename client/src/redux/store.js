import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';


const loadFromLocalStorage = () => {
    try {
        const storedProducts = localStorage.getItem('Shopping Cart');
        if (storedProducts === null) return undefined;
        return JSON.parse(storedProducts);
    } catch (e) {
        console.error("Could not load cart from localStorage", e);
        return undefined;
    }
};

const preloadedState = {
    cart: {
        items: loadFromLocalStorage() || {}
    }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState
});
