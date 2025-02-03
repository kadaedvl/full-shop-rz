import axios from "axios";

export const axiosInstantds = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})