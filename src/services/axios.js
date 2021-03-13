import axios from "axios";
import { KEYS } from "../constants/localstorage";

const baseConfig = {
  baseURL: process.env.REACT_APP_API_BASEURL,
};

const instance = axios.create(baseConfig);

export const computeConfig = ({url, ...config}) => {
  return {
    ...baseConfig,
    ...config,
    url: url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(KEYS.access_token)}`,
    },
  };
};

export const methods = {
  get: (config) => axios.request({ ...computeConfig(config), method: "get" }),
  post: (config) => axios.request({ ...computeConfig(config), method: "post" }),
  put: (config) => axios.request({ ...computeConfig(config), method: "put" }),
  patch: (config) => axios.request({ ...computeConfig(config), method: "patch" }),
  delete: (config) => axios.request({ ...computeConfig(config), method: "delete" }),
};

export default instance;
