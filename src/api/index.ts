import axios from "axios";
import { toast } from "react-toastify";

import locale from "locale";
import useLocalStore from "stores/useLocalStore";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const tokenUser = useLocalStore.getState().tokenUser;
    const orgId = useLocalStore.getState().orgId;

    if (!tokenUser) {
      toast.error(locale.en.error.missingTokenUser);
      return Promise.reject(locale.en.error.missingTokenUser);
    }

    if (!orgId) {
      toast.error(locale.en.error.missingOrgId);
      return Promise.reject(locale.en.error.missingOrgId);
    }

    config.url = `http://localhost:3011/${config.url}`;
    config.headers!.authorization = useLocalStore.getState().tokenUser;
    config.headers!.orgId = useLocalStore.getState().orgId;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response.status;
    const message = error.response.data.message;

    toast.error(`${status}: ${message}`);

    return Promise.reject(error);
  }
)

export default axiosInstance;