import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import useApi from "../hooks/useApi";
import useQuery from "../hooks/useQuery";

const Authcallback = () => {
  const { user, authenticate } = useContext(AppContext);
  const query = useQuery();
  const {
    post: { state, fetch: post },
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
    const { access_token } = state.value.data;
    authenticate(access_token);
  }, [authenticate, state.error, state.value.data]);

  return (
    <div>
      {state.loading && <span>Authenticating...</span>}
      {state.error && <div>Request errored</div>}
      {state.value.data && user && <Redirect to="/" />}
    </div>
  );
};

export default Authcallback;
