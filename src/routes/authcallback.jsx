import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import instance from "../services/axios";
const Authcallback = () => {
  const query = useQuery();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    instance
      .post("oauth/osu/token", {
        code: query.get("code"),
      })
      .then((response) => {
        const {
          data: { token_type, access_token },
        } = response;
        const bearerToken = `${token_type} ${access_token}`;
        instance.defaults.headers.common["Authorization"] = bearerToken;

        setAuthenticated(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  if (authenticated) {
    return <Redirect to="/"></Redirect>;
  }
  return null;
};

export default Authcallback;
