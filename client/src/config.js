import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://flowkite-backend-production.up.railway.app/app"
})