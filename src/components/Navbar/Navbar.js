import React, { useCallback, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Navbar.css";

import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import AppContext from "../../contexts/AppContext";
import useQuery from "../../hooks/useQuery";
import Input from "../Input";

const Navbar = () => {
  const history = useHistory();
  const query = useQuery();
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const handleClick = useCallback(() => {
    setClicked((clicked) => !clicked);
  }, []);

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();
      history.push({
        pathname: "/search-results",
        search: `search=${inputRef.current.value}`,
      });
    },
    [history]
  );

  return (
    <AppContext.Consumer>
      {({ user, isAuthenticated }) => (
        <section className="Navbar-Container">
          <nav className="NavbarItems xl:w-3/4 mx-auto space-x-2">
            <section className="navbar-logo">
              <Link to="/" className="flex items-center space-x-4">
                <strong>Pool Party</strong>
                <i className="fas fa-swimming-pool"></i>
              </Link>
            </section>
            <div className="menu-icon" onClick={handleClick}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
              {isAuthenticated === false && (
                <a href={process.env.REACT_APP_API_BASEURL + "/oauth/osu"}>
                  <li className="nav-links-mobile">Log in</li>
                </a>
              )}
            </ul>
            <form onSubmit={handleSearchSubmit}>
              <Input
                ref={inputRef}
                name="search"
                defaultValue={query.get("search")}
              />
            </form>
            {isAuthenticated ? (
              <div className="p-4">
                <img src={user.avatar_url} alt={user.username} className="rounded-full h-16 hover:bg-gray-900" onClick={() => {alert("logging off!")}}/>
              </div>
            ) : (
              <a href={process.env.REACT_APP_API_BASEURL + "/oauth/osu"}>
                <Button>Log In</Button>
              </a>
            )}
          </nav>
        </section>
      )}
    </AppContext.Consumer>
  );
};

export default Navbar;
