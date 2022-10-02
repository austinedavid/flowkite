import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://flowkite.herokuapp.com/app/"
})