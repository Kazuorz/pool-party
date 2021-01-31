import { useCallback, useMemo, useState } from "react";
import { useAsyncFn } from "react-use";
import axios from "../services/axios";

const initialAccessToken = localStorage.getItem("access_token");

const useApi = (path, initialValue) => {
  const [config, setConfig] = useState(
    /** @type {import("axios").AxiosRequestConfig} */
    ({
      url: path,
      headers: {
        Authorization: initialAccessToken,
      },
    })
  );

  const setAuthorization = useCallback((acessToken) => {
    setConfig((config) => {
      config.headers.Authorization = acessToken;
      localStorage.setItem("access_token", acessToken);
      return config;
    });
  }, []);

  const isAuthenticated = useMemo(() => {
    return Boolean(config.headers.Authorization);
  }, [config.headers.Authorization]);

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
    setAuthorization: setAuthorization,
    isAuthenticated: isAuthenticated,
  };
};

export default useApi;
