import { BASE_URL } from "../constants/constants";
import axios from 'axios'

export const signup = async (payload) => {
    return await axios.post(`${BASE_URL}/api/auth/add-user`, payload);
}

export const login = async (payload) => {
    return await axios.post(`${BASE_URL}/api/auth/login-user`, payload);
}