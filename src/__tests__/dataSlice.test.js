import dataReducer, {
    setData,
    addData,
    setPage,
    setGenres,
    setFilter,
    addFilter,
    removeFilter
} from '../store/dataSlice.js';

describe('dataSlice reducer', () => {
    const initialState = {
        items: [],
        page: 1,
        filter: [],
        genres: [],
        loading: false,
    };

    it('should handle setData', () => {
        const action = setData([{ id: 1, title: 'Movie 1' }]);
        const state = dataReducer(initialState, action);
        expect(state.items).toEqual([{ id: 1, title: 'Movie 1' }]);
    });

    it('should handle addData', () => {
        const previousState = {
            ...initialState,
            items: [{ id: 1, title: 'Movie 1' }]
        };
        const action = addData([{ id: 2, title: 'Movie 2' }]);
        const state = dataReducer(previousState, action);
        expect(state.items).toEqual([{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }]);
    });

    it('should handle setPage', () => {
        const action = setPage(2);
        const state = dataReducer(initialState, action);
        expect(state.page).toEqual(2);
    });

    it('should handle setGenres', () => {
        const action = setGenres(['Action', 'Comedy']);
        const state = dataReducer(initialState, action);
        expect(state.genres).toEqual(['Action', 'Comedy']);
    });

    it('should handle setFilter', () => {
        const action = setFilter(['Drama']);
        const state = dataReducer(initialState, action);
        expect(state.filter).toEqual(['Drama']);
    });

});