import React from 'react'

const Loading = (data, isLoading) => {
    const loaderGif = process.env.PUBLIC_URL + '/img/loader_small.gif';
    
    if (isLoading)
        return (
            <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }} >
                <img src={loaderGif} alt="loading_gif" />
                <div className="fade-in-slow">Loading</div>
            </div >
        );

    if (!data) return (
        <span>Data not available</span>
    );
}

export default Loading
