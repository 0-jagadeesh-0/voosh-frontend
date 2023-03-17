import { BASE_URL } from "../constants/constants";
import axios from 'axios';

export const addorder = async (payload) => {
    return await axios.post(`${BASE_URL}/api/orders/add`, payload, { headers: { "token": localStorage.getItem("token"), "id": localStorage.getItem("userId") } });
}

export const getorders = async () => {
    return await axios.get(`${BASE_URL}/api/orders/items`, { headers: { "token": localStorage.getItem("token"), "id": localStorage.getItem("userId") } });
}