import { useContext, useEffect, useState } from "react";
import { useAsyncFn } from "react-use";

import { KEYS } from "../constants/localstorage";
import AppContext from "../contexts/AppContext";
import axios from "../services/axios";

const useApi = (path, initialValue) => {
  const { user } = useContext(AppContext);
  const [config, setConfig] = useState(
    /** @type {import("axios").AxiosRequestConfig} */
    ({
      url: path,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(KEYS.access_token)}`,
      },
    })
  );

  useEffect(() => {
    setConfig((config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        KEYS.access_token
      )}`;
      return config;
    });
  }, [user]);

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
  };
};

export default useApi;
