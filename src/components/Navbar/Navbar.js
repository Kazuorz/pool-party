import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AppContext from "../../contexts/AppContext";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <AppContext.Consumer>
        {({ user, isAuthenticated }) => (
          <nav className="NavbarItems">
            <Link to="/">
              <h1 className="navbar-logo">
                Pool Party <i className="fas fa-swimming-pool"></i>
              </h1>
            </Link>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
            {isAuthenticated ? (
              <div>
                <img src={user.avatar_url} alt={user.username} />
                {user.username}
              </div>
            ) : (
              <a href={process.env.REACT_APP_API_BASEURL + "/oauth/osu"}>
                <Button>Log In</Button>
              </a>
            )}
          </nav>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Navbar;
