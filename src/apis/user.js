import { BASE_URL } from "../constants/constants";
import axios from 'axios';

export const getuser = async () => {
    return await axios.get(`${BASE_URL}/api/user/info`, { headers: { token: localStorage.getItem("token"), id: localStorage.getItem("userId") } });
}

export const updateuser = async (payload) => {
    return await axios.put(`${BASE_URL}/api/user/update`, payload, { headers: { token: localStorage.getItem("token"), id: localStorage.getItem("userId") } });
}