import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import uiSlice from './uiSlice';

const store = configureStore({
    reducer: { data: dataSlice, ui: uiSlice },
});

export default store;