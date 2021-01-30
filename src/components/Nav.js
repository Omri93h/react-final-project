import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';


const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/Dashboard">
                    <li>
                        <DashboardIcon fontSize="large" />
                        <span className="li-content" >Dashboard</span>
                    </li>
                </Link>

                <Link to="/Strategies">
                    <li>
                        <EmojiObjectsIcon fontSize="large" />
                        <span className="li-content" >Strategies</span>
                    </li>
                </Link>

                <Link to="/Settings">
                    <li>
                        <SettingsIcon fontSize="large" />
                        <span className="li-content" >Settings</span>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
