import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        initialize: (state, action) => {
            return action.payload;
        },
        addItem: (state, action) => {
            state.push(action.payload);
        },
        editItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, editItem, deleteItem, initialize } = itemSlice.actions;
export default itemSlice.reducer;
