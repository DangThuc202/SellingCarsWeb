// formsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentForm: 'login', // Form đang hiển thị ban đầu là form login
};

const formsSlice = createSlice( {
    name: 'forms',
    initialState,
    reducers: {
        setCurrentForm ( state, action )
        {
            state.currentForm = action.payload;
        },
    },
} );

export const { setCurrentForm } = formsSlice.actions;

export default formsSlice.reducer;
