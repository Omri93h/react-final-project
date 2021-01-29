import React from 'react';
import { Link } from 'react-router-dom';
import SmallLogo from './../img/logo_header.png';
import ProfileIcon from './../img/icon_profile.png';

const Header = () => {

    const Logo = {
        background: `url(${SmallLogo}) no-repeat left center`,
        marginLeft: `30px`,
    }

    const appName = {
        color: "white",
        marginLeft: "75px",
        textShadow: "1px 1px 4px #111"
    }

    const User = {
        background: `url(${ProfileIcon}) no-repeat left center`,
        marginRight: "30px"
    }

    return (
        <header>
            <Link exact to="/">
                <div className="logo" style={Logo}>
                    <h1 style={appName}>Currenger</h1>
                </div>
            </Link>
            <Link exact to="/">
                <div className="user" style={User}>
                    <span style={{ marginLeft: "40px" }}>
                        UserName
                    </span>
                </div>
            </Link>
        </header>
    )
}

export default Header