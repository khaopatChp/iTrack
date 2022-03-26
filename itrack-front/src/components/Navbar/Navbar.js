import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {MenuItems} from './Menuitem';
import './Navbar.css';

function Navbar() {
    const [state,setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">iTrack<i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title} 
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Button><Link to="/register">Sign up</Link></Button>
        </nav>
    );
}

export default Navbar;