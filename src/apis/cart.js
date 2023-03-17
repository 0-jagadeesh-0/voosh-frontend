import { BASE_URL } from "../constants/constants";
import axios from 'axios';

export const addcartitem = async (payload) => {
    return await axios.post(`${BASE_URL}/api/cart/add`, payload, { headers: { "token": localStorage.getItem("token"), "id": localStorage.getItem("userId") } });
}

export const getcartitems = async () => {
    return await axios.get(`${BASE_URL}/api/cart/items`, { headers: { "token": localStorage.getItem("token"), "id": localStorage.getItem("userId") } });
}