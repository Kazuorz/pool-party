import { useAsyncFn } from "react-use";
import axios from "../services/axios";

const useApi = (path, initialValue) => {
  const config = {
    url: path,
  };

  const initialState = {
    loading: true,
    value: {data : initialValue},
  };

  const getState = useAsyncFn(
    async (params) =>
      axios.request({ ...config, method: "get", params: params }),
    [],
    initialState
  );
  const postState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "post", data: data }),
    [],
    initialState
  );
  const putState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "put", data: data }),
    [],
    initialState
  );
  const deleteState = useAsyncFn(
    async (data) => axios.request({ ...config, method: "delete", data: data }),
    [],
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
