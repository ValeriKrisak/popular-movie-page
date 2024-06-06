import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        countries: [],
        languages: [],
        providers: [],
    },
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
        setLanguages: (state, action) => {
            state.languages = action.payload;
        },
        setProviders: (state, action) => {
            state.providers = action.payload
        }

    },
});

export const { setProviders, setCountries, setLanguages } = uiSlice.actions;
export default uiSlice.reducer;