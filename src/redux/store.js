import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './ProductSlice';

const loadItemsFromLocalStorage = () => {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
};

const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
};

const store = configureStore({
    reducer: {
        items: itemReducer,
    },
});

store.subscribe(() => {
    saveItemsToLocalStorage(store.getState().items);
});

store.dispatch({ type: 'items/initialize', payload: loadItemsFromLocalStorage() });

export default store;
