import axios from 'axios';
import { setProviders, setCountries, setLanguages } from '../store/uiSlice';
import Error from '../components/UI/Error/Error';
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchCountries = () => async (dispatch) => {
    const localData = localStorage.getItem('countries');
    if (localData) {
        dispatch(setCountries(JSON.parse(localData)));
    } else {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/configuration/countries`, {
                params: {
                    api_key: apiKey
                }
            });
            const dataArray = Object.values(response.data);
            localStorage.setItem('countries', JSON.stringify(dataArray));
            dispatch(setCountries(dataArray));
        } catch (error) {
            console.error("Error fetching countries:", error);
            <Error message={error} />;
        }
    }
};

export const fetchLanguages = () => async (dispatch) => {
    const localData = localStorage.getItem('languages');
    if (localData) {
        dispatch(setLanguages(JSON.parse(localData)));
    } else {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/configuration/languages`, {
                params: {
                    api_key: apiKey
                }
            });
            const dataArray = Object.values(response.data)
            localStorage.setItem('languages', JSON.stringify(dataArray));
            dispatch(setLanguages(dataArray));
        } catch (error) {
            console.error("Error fetching languages:", error);
            <Error message={error} />;
        }
    }
};

export const fetchProviders = () => async (dispatch) => {

    try {
        const response = await axios.get(` https://api.themoviedb.org/3/watch/providers/movie`, {
            params: {
                api_key: apiKey
            }
        });
        const dataArray = Object.values(response.data);
        localStorage.setItem('providers', JSON.stringify(dataArray));
        dispatch(setProviders(dataArray[0]));
    } catch (error) {
        console.error("Error fetching providers:", error);
        <Error message={error} />;
    }

};

