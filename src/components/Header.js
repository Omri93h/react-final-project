import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


async function logOut(props) {
    fetch('http://localhost:8080/auth/logout', {
        credentials: 'include',
        withCredentials: 'true'
    })
        .then(props.authorization.setAuth(false))
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error
}

const Header = (props) => {
    const smallLogo = process.env.PUBLIC_URL + '/img/logo_header.png';
    const defaultProfileIcon = process.env.PUBLIC_URL + '/img/icon_profile.png';

    async function logOutUser() {
        await logOut(props)
    }
    //left side styles
    const appLogoStyle = {
        background: `url(${smallLogo}) no-repeat left center`,
        marginLeft: `30px`,
    }

    const appNameStyle = {
        color: "white",
        marginLeft: "60px",
        textShadow: "1px 1px 4px #111"
    }


    //right side styles
    const ProfileIcon = props.thumbnail ? props.thumbnail : defaultProfileIcon;
    console.log(props)
    const ProfileIconStyle = {
        background: `url(${ProfileIcon}) no-repeat left center`,
        width: "40px",
        height:"40px",
        borderRadius:"50%",
        backgroundSize:"40px",
        marginTop:"10px"
    }

    const userNameStyle = {
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "auto",
        marginLeft:"10px",
        maxWidth: "80px",
        whiteSpace: "nowrap",
        fontSize: "14px"
    }

    //right side properties

    const userName = "userName";

    const divUserIsConnected = (
        <>
            <div style={{ height: "50px", marginRight: "20px" }}>
                <Button onClick={() => { logOutUser() }} name="log-out" size="small" variant="contained" style={{ fontSize: "12px" }}>Log out</Button>
            </div>
            <div style={ProfileIconStyle}></div>
            <div style={userNameStyle}>{props.username}</div>

        </>
    )

    const divUserIsNotConnected = (
        <>
            <Link to="/Authentication"><button>Login / Register</button></Link>
        </>
    );


    if (props.authorization.isAuthorized === true) {
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
            <div className="user-side">
                {
                    props.authorization.isAuthorized ?
                        divUserIsConnected
                        :
                        divUserIsNotConnected
                }
            </div>

        </header>
    )
}

export default Header