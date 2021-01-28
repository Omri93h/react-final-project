import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    const navStyle = {
        color: 'black'
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Dashboard" style={navStyle}>
                        Dashboard
                    </Link>
                </li>

                <li>
                <Link to="/Strategies" style={navStyle}>
                  
                        Strategies
               
                </Link>
                </li>

                <li>
                <Link to="/Settings" style={navStyle}>
                   
                        Settings
               
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
