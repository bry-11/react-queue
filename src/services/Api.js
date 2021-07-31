import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => {
        console.log(`Interceptor Request Error${error}`)
    }
)

export default axiosInstance
