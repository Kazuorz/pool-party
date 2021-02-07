import { createContext, useCallback, useMemo, useState } from "react";
import { KEYS } from "../constants/localstorage";
import jsonwebtoken from "jsonwebtoken";

const AppContext = createContext({
  user: {
    _id: "invalid_id",
    username: "Default",
    avatar_url: "avatar_url",
    osu_id: "osu_id",
  },
  isAuthenticated: false,
  authenticate: () => {},
  unauthenticate: () => {},
});

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(
    jsonwebtoken.decode(localStorage.getItem(KEYS.access_token))
  );

  const authenticate = useCallback((token) => {
    localStorage.setItem(KEYS.access_token, token);
    setUser(jsonwebtoken.decode(token));
  }, []);

  const unauthenticate = useCallback(() => {
    localStorage.removeItem(KEYS.access_token);
    setUser(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: user,
        authenticate: authenticate,
        unauthenticate: unauthenticate,
        isAuthenticated: user !== null,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

AppContext.displayName = "AppContext";

export default AppContext;
