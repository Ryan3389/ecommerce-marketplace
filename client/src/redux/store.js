import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('Shopping Cart', serializedState);
    } catch (e) {
        console.error("Could not save state to localStorage", e);
    }
};

// Load initial state from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('Shopping Cart');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state from localStorage", e);
        return undefined;
    }
};

const preloadedState = {
    cart: loadFromLocalStorage() || { items: {} }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState
});

// Subscribe to store updates
store.subscribe(() => {
    saveToLocalStorage(store.getState().cart);
});

export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';


// const loadFromLocalStorage = () => {
//     try {
//         const storedProducts = localStorage.getItem('Shopping Cart');
//         if (storedProducts === null) return undefined;
//         return JSON.parse(storedProducts);
//     } catch (e) {
//         console.error("Could not load cart from localStorage", e);
//         return undefined;
//     }
// };

// const preloadedState = {
//     cart: {
//         items: loadFromLocalStorage() || {}
//     }
// };

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
//     preloadedState
// });
