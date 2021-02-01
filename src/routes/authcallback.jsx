import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useApi from "../hooks/useApi";
import useQuery from "../hooks/useQuery";

const Authcallback = () => {
  const query = useQuery();
  const {
    post: { state, fetch: post },
    setAuthorization,
    isAuthenticated,
  } = useApi("/oauth/osu/token");

  useEffect(() => {
    post({
      code: query.get("code"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!state.error && !state.value.data) {
      return;
    }
    const { token_type, access_token } = state.value.data;
    const token = `${token_type} ${access_token}`;
    setAuthorization(token);
  }, [setAuthorization, state.error, state.value.data]);

  if (state.error) {
    return <div>Request errored</div>;
  }
  if (state.value.status === 200 && isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return <div>Authenticating...</div>;
};

export default Authcallback;
