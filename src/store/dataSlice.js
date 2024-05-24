import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        page: 1,
        filter: [],
        genres: [],
    },
    reducers: {
        setData: (state, action) => {
            state.items = action.payload;
        },
        addData: (state, action) => {
            state.items.push(...action.payload);
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },


    },
});

export const { setData, addData, setPage, setGenres, setFilter } = dataSlice.actions;
export default dataSlice.reducer;