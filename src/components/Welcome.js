import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Welcome = (props) => {
    const video = process.env.PUBLIC_URL + '/vid/video2.mp4';
    const centerDivStyle = {
        position: "relative",
        color: "#aaa",
        lineHeight: "50px",
        padding: "100px 0 75px 0",
        width: "100%"
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

    return (
        <div className="page">
            <div class="videoContainer">
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
                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }} className="fade-in-slow">
                        <Link to="/dashboard">
                            <Button size="large" variant="contained" style={{ opacity: "0.8" }} onClick={() => (props.auth.setAuth(true))}>
                                <b>Log in</b>
                            </Button>
                        </Link>
                        <Link to="/dashboard">
                            <Button size="large" variant="contained" style={{ background: "#1c316d", color: "white", opacity: "0.8" }} >
                                <b>Sign Up</b>
                            </Button>
                        </Link>

                        <style type="text/css">
                            {` header {
                                position:absolute;
                                background-color: transparent;
                                transition:0.2s all ease
                            } 
                            header .user-side {
                                display:none
                            }
                        `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
