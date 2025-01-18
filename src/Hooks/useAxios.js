import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_baseAPI,
    // withCredentials: true,
});

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;
