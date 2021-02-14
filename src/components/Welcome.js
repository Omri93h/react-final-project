import React from 'react';
import 'reactjs-popup/dist/index.css';
import Button from '@material-ui/core/Button';


const Welcome = (props) => {
    const video = process.env.PUBLIC_URL + '/vid/video2.mp4';

    const routeChange = () => {
        window.location.assign('http://localhost:8080/auth/google');
    }


    const centerDivStyle = {
        position: "relative",
        color: "#aaa",
        lineHeight: "50px",
        padding: "100px 0 75px 0",
        width: "100%",
    }

    const welcomePageH1 = {
        fontSize: "48px",
        position: "absolute",
        width: "100%",

    }

    const welcomePageParagraph = {
        display: "block",
        fontSize: "24px",
        width: "fit-content",
    }

    const contentStyle = { background: 'white', borderRadius: "10px", width: "300px", border: "0", opacity: ".9" };
    const overlayStyle = { background: 'rgba(0,0,0,0.75)' };

    return (
        <div className="page">
            <div className="videoContainer">
                <video src={video} alt="currenger video" autoPlay loop muted>
                    (Your browser does not support the video tag)
                </video>

            </div>
            <div className="wrapper">
                <div style={centerDivStyle}>
                    <h1 style={welcomePageH1} className="slide-up">Auto Crypto Trading & Analysis</h1><br />
                    <pre style={welcomePageParagraph} className="fade-in-slow">
                        Manage your cryptocurrency portfolio easily
                    </pre>

                    <div style={{ display: "flex", gap: "20px", marginTop: "30px", height: "50px" }} className="fade-in-slow">
                        {/* <Button onClick={() => (<Redirect to="/login" />)} size="large" variant="contained" style={{ background: "#1c316d", color: "white", opacity: "0.8" }}>
                            New LOGIN
                        </Button>

                        <Popup trigger={loginButton} modal closeOnDocumentClick {...{ contentStyle, overlayStyle }}>
                            <Login auth={props.auth} user={props.user} />
                        </Popup>
                        <Popup trigger={signUpButton} modal closeOnDocumentClick {...{ contentStyle, overlayStyle }}>

                            <SignUp />
                        </Popup> */}
                        <Button onClick={routeChange} size="large" variant="contained" style={{ background: "#1c316d", color: "white", opacity: "0.8", fontWeight: "bold", padding: "10px" }}>
                            <pre style={{ fontSize: "16px" }}><p style={{ fontSize: "10px" }}>Login / Register with</p>
                                GOOGLE</pre>
                        </Button>
                    </div>
                </div>
            </div>
            <style type="text/css">
                {` header {
                                position:absolute;
                                background-color: transparent;
                                transition:0.2s all ease;
                                box-shadow: 0px 0px 1px white
                            } 
                            header .user-side {
                                display:none
                            }
                        `}
            </style>
        </div>
    )
}

export default Welcome
