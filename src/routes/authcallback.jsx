import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import useApi from "../hooks/useApi";
import useQuery from "../hooks/useQuery";

const Authcallback = () => {
  const query = useQuery();
  const {
    post: { state, fetch: post },
    setAuthentication,
    isAuthenticated,
  } = useApi("/oauth/osu/token");

  useEffect(() => {
    setAuthentication(null);
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
    setAuthentication(token);
  }, [setAuthentication, state.error, state.value.data]);

  return (
    <div>
      {state.loading && <span>Authenticating...</span>}
      {state.error && <div>Request errored</div>}
      {state.value.data && isAuthenticated && <Redirect to="/" />}
    </div>
  );
};

export default Authcallback;
