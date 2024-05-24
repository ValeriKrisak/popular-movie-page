import axios from 'axios';
import { setData, addData, setPage, setGenres } from '../store/dataSlice';
import Error from '../components/UI/Error/Error';
const apiKey = process.env.REACT_APP_API_KEY;


export const fetchData = (page, filter) => async (dispatch) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                page: page,
                with_genres: filter,
                api_key: apiKey
            }
        });

        const dataArray = Object.values(response.data.results);
        dispatch(setData(dataArray));
    } catch (error) {
        <Error message={error} />;
    }
};

export const loadMoreData = (page, filter) => async (dispatch) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                page: page,
                with_genres: filter,
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data.results)
        dispatch(addData(dataArray));
        dispatch(setPage(page + 1));
    } catch (error) {
        <Error message={error} />;
    }
};

export const fetchGenres = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
            params: {
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data)
        dispatch(setGenres(dataArray[0]));
    } catch (error) {
        <Error message={error} />;
    }
};

/* export const fetchCountries = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/configuration/countries`, {
            params: {
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data)
        dispatch(setCountries(dataArray));
    } catch (error) {
        <Error message={error} />;
    }
};

export const fetchLanguages = () => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/configuration/languages`, {
            params: {
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data)
        dispatch(setLanguages(dataArray));
    } catch (error) {
        <Error message={error} />;
    }
}; */

