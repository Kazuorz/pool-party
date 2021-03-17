import { useMemo } from "react";
import { useAsyncFn } from "react-use";

import {  methods } from "../services/axios";

export default function useApi(path, initialValue) {
  const config = useMemo(() => ({ url: path }), [path]);

  const initialState = {
    loading: true,
    value: { data: initialValue },
  };

  const getState = useAsyncFn(
    async (params) => methods.get({ ...config, params: params }),
    [config],
    initialState
  );
  const postState = useAsyncFn(
    async (data) => methods.post({ ...config, data: data }),
    [config],
    initialState
  );
  const putState = useAsyncFn(
    async (data) => methods.put({ ...config, data: data }),
    [config],
    initialState
  );

  const patchState = useAsyncFn(
    async (data) => methods.patch({ ...config, data: data }),
    [config],
    initialState
  );

  const deleteState = useAsyncFn(
    async (data) => methods.delete({ ...config, data: data }),
    [config],
    initialState
  );

  return {
    get: { state: getState[0], fetch: getState[1] },
    post: { state: postState[0], fetch: postState[1] },
    put: { state: putState[0], fetch: putState[1] },
    delete: { state: deleteState[0], fetch: deleteState[1] },
    patch: { state: patchState[0], fetch: patchState[1] },
  };
}
