import { Link } from 'react-router-dom';

const Header = (props) => {
    const smallLogo = process.env.PUBLIC_URL + '/img/logo_header.png';

    const ProfileIcon = process.env.PUBLIC_URL + '/img/icon_profile.png';

    //left side styles
    const appLogoStyle = {
        background: `url(${smallLogo}) no-repeat left center`,
        marginLeft: `30px`,
    }

    const appNameStyle = {
        color: "white",
        marginLeft: "75px",
        textShadow: "1px 1px 4px #111"
    }


    //right side styles

    const userSideStyle = {
        border: "1px solid green",
        height: "60px",
        position: "absolute",
        right: "30px",
        display: "flex",
    }

    const ProfileIconStyle = {
        background: `url(${ProfileIcon}) no-repeat left center`,
        width: "40px"
    }

    const userNameStyle = {
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "auto",
        maxWidth: "80px",
        whiteSpace: "nowrap",
    }

    //right side properties

    const userName = "userName";

    const divUserIsConnected = (
        <>
            <div style={ProfileIconStyle}></div>
            <div style={userNameStyle}>userName</div>
        </>
    )

    const divUserIsNotConnected = (
        <>
            <Link to="/Authentication"><button>Login / Register</button></Link>
        </>
    );


    if (props.userConnected === true) {
        console.log("user connected")
    } else {
        console.log("NOT CONNECTED")
    }

    return (
        <header>
            <Link to="/">
                <div className="logo" style={appLogoStyle}>
                    <h1 style={appNameStyle}>Currenger</h1>
                </div>
            </Link>
            <div className="user-side" style={userSideStyle}>
                {
                    props.userConnected ?
                        divUserIsConnected
                        :
                        divUserIsNotConnected
                }
            </div>

        </header>
    )
}

export default Header