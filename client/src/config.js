import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://flowkitebackend.herokuapp.com/app/"
})