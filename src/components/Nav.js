import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';


const Nav = () => {
    const navStyle = {
        color: 'grey',

    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Dashboard" style={navStyle}>
                        <DashboardIcon fontSize="large">
                            Dashboard
                        </DashboardIcon>

                    </Link>
                </li>

                <li>
                    <Link to="/Strategies" style={navStyle}>
                        <EmojiObjectsIcon fontSize="large">
                            Strategies
                        </EmojiObjectsIcon>
                    </Link>
                </li>

                <li>
                    <Link to="/Settings" style={navStyle}>
                        <SettingsIcon fontSize="large">
                            Settings
                        </SettingsIcon>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
