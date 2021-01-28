import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Button } from '../Button'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    goToAuth = () =>{
        window.location = "http://localhost:3010/oauth/osu";
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link to ="/"><h1 className="navbar-logo">Pool Party <i className="fas fa-swimming-pool"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.goToAuth}>Log In</Button>
            </nav>
        )
    }
  }
export default Navbar