import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Nav = () => {
    const activeStyle = {
        color: "#333",
        fontWeight: "bold"
    }

    const DashboardLink = (
        <NavLink to="/Dashboard" activeStyle={activeStyle}>
            <li >
                <DashboardIcon fontSize="large" />
                <div className="li-content" >Dashboard</div>
            </li>
        </NavLink>
    )

    const StrategiesLink = (

        <NavLink to="/Strategies" activeStyle={activeStyle}>
            <li>
                <EmojiObjectsIcon fontSize="large" />
                <div className="li-content" >Strategies</div>
            </li>
        </NavLink>
    )
    const SettingsLink = (

        <NavLink to="/Settings" activeStyle={activeStyle} >
            <li>
                <SettingsIcon fontSize="large" />
                <div className="li-content" >Settings</div>
            </li>
        </NavLink>
    )

    const ManualOrderLink = (
        <NavLink to="/Manual_Order" activeStyle={activeStyle}>
            <li>
                <AddShoppingCartIcon fontSize="large" />
                <div className="li-content" >Manual<br/>Order</div>
            </li>
        </NavLink>
    )

    return (
        <nav>
            <ul>
                {DashboardLink}
                {StrategiesLink}
                {ManualOrderLink}
                {SettingsLink}

            </ul>
        </nav>
    )
}

export default Nav
