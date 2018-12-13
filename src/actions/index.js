
import axios from 'axios'
const API_KEY = '8af4c366f1c0b26030723b7ade444db9';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default function fetchWeather (city ){
    const url = `${ROOT_URL}&q=${city},NG`;
    const request = axios.get(url);
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}
