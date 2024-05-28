import axios from 'axios';
import { setProviders } from '../store/uiSlice';
import Error from '../components/UI/Error/Error';
const apiKey = process.env.REACT_APP_API_KEY;

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

export const fetchProviders = () => async (dispatch) => {
    try {
        const response = await axios.get(` https://api.themoviedb.org/3/watch/providers/movie`, {
            params: {
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data)
        dispatch(setProviders(dataArray[0]));
    } catch (error) {
        <Error message={error} />;
    }
};

