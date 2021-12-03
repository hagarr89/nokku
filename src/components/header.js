import {Link} from "react-router-dom";
import React from "react";
import style from '../assets/style/header.scss'

const Header = () => {
    return (
        <header className="App-header">
            <nav className="navbar">
                <ul className="navbar-navo">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/Campaigns'} className="nav-link">Campaigns</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header