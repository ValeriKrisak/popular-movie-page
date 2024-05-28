import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        page: 1,
        filter: [],
        genres: [],
        scrollEnabled: false,
    },
    reducers: {
        setData: (state, action) => {
            state.items = action.payload;
        },

        addData: (state, action) => {
            const existingIds = new Set(state.items.map(item => item.id));
            const newItems = action.payload.filter(item => !existingIds.has(item.id));
            state.items.push(...newItems);
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
        setScrollEnabled: (state, action) => {
            state.scrollEnabled = action.payload;
        }

    },
});

export const { setData, addData, setPage, setGenres, setFilter, setScrollEnabled } = dataSlice.actions;
export default dataSlice.reducer;