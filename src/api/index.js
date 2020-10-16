import axios from 'axios';
import {BASE_URL} from './../constants';

export const home = async (gender = '', year) => {
    const res = await axios.get(BASE_URL + "home", { params: { gender, year } });
    return res.data;
}