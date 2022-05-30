import axios from "axios";

import useLocalStore from "stores/useLocalStore";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.url = `http://localhost:3011/api/${config.url}`;

    if (config.headers) {
      config.headers.authorization = useLocalStore.getState().tokenUser;
      config.headers.orgId = useLocalStore.getState().orgId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;