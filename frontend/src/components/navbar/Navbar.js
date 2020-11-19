import React from 'react';
// import { Dropdown } from 'semantic-ui-react'
import Dropdown from "./Dropdown"
import Eggicorn from "./img/eggicorn.png"
import Karen from "./img/karen.png"
import './Navbar.css';


const Navbar = () => {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <nav>
            <div className="logo-dropdown">
                <img className="logo" src={Eggicorn} />
                <p>Video Game review site for uninfored parents</p>
                <Dropdown />
                
            </div>
            <div className="search">
                <input className="search-bar" type="text" placeholder="🔍  Search" />
            </div>
            <div className="navbar-user">
                <img src={Karen} className="nav-user-img"></img>
                <h3>UsernameData</h3>
            </div>
        </nav>
    )
}


export default Navbar;