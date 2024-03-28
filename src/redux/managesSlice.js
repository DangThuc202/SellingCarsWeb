// formsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentForm: 'product', // Form đang hiển thị ban đầu là form login
};

const managesSlice = createSlice( {
    name: 'manages',
    initialState,
    reducers: {
        setCurrentForm ( state, action )
        {
            state.currentForm = action.payload;
        },
    },
} );

export const { setCurrentForm } = managesSlice.actions;

export default managesSlice.reducer;
