// store.js
import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';
import managesReducer from './managesSlice';

export default configureStore( {
    reducer: {
        forms: formsReducer,
        manages: managesReducer
    },
} );
