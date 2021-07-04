import React from 'react'
import "./Footer.css";
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="h-36 flex justify-center items-center">
            <a href="https://github.com/Kazuorz/pool-party"><FaGithub className="h-8 w-8 self-center"/></a>
        </footer>
    )
}

export default Footer
