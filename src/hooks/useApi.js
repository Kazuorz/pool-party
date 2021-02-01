import { useCallback, useState } from "react";
import { useAsyncFn } from "react-use";
import axios from "../services/axios";

const initialAuthorization = localStorage.getItem("access_token");

const useApi = (path, initialValue) => {
  const [config, setConfig] = useState(
    /** @type {import("axios").AxiosRequestConfig} */
    ({
      url: path,
      headers: {
        Authorization: initialAuthorization,
      },
    })
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(initialAuthorization)
  );

  const setAuthentication = useCallback((token) => {
    setConfig((config) => {
      config.headers.Authorization = token;
      localStorage.setItem("access_token", token);
      setIsAuthenticated(Boolean(token));
      return config;
    });
  }, []);

  const initialState = {
    loading: true,
    value: { data: initialValue },
  };

  const getState = useAsyncFn(
    async (params) =>
      axios.request({ ...config, method: "get", params: params }),
    [config],
    initialState
  );
  const postState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "post", data: data }),
    [config],
    initialState
  );
  const putState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "put", data: data }),
    [config],
    initialState
  );
  const deleteState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "delete", data: data }),
    [config],
    initialState
  );

  return {
    get: { state: getState[0], fetch: getState[1] },
    post: { state: postState[0], fetch: postState[1] },
    put: { state: putState[0], fetch: putState[1] },
    delete: { state: deleteState[0], fetch: deleteState[1] },
    setAuthentication: setAuthentication,
    isAuthenticated: isAuthenticated,
  };
};

export default useApi;
