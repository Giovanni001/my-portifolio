import axios from "axios";
import config from "../config";

export const instance = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 120000,
});

instance.interceptors.request.use(
    (configuration) => {
        // Do something before request is sent
        const token = localStorage.getItem("token");
        const tokenConfig = configuration;
        tokenConfig.headers = {
            ...tokenConfig.headers,
            Authorization: token,
        };
        return tokenConfig;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

const requisitionFunctions = {
    get: (url, options) => {
        return instance.get(url, options);
    },
    post: (url, data, options) => {
        return instance.post(url, data, options);
    },
    put: (url, data, options) => {
        return instance.put(url, data, options);
    },
    delete: () => {
        return instance.delete;
    },
};

export default requisitionFunctions;
