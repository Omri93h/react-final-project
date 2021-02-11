import PieChart from './PieChart';
import { useState, useEffect } from 'react';


async function fetchData() {
    let url = 'https://omridavidproject.herokuapp.com/api/portfolio/';
    let response = await fetch(url);
    let commits = await response.json();
    console.log("from api:", commits)

    
    const data = []
    for (const asset in commits) {
        if (asset === 'BTC') {
            commits[asset] = commits[asset].toFixed(6)
        } else {
            commits[asset] = commits[asset].toFixed(3)
        }
        data.push({ "id": asset, "label": (commits[asset] + " " + asset), "amount": commits[asset] , "value":"300"})
    }
    console.log("needed: ", data)
    return data;
}
const Dashboard = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect with an empty dependency array works the same way as componentDidMount
    useEffect(async () => {
        try {
            // set loading to true before calling API
            setLoading(true);
            const data = await fetchData();
            setData(data);
            // switch loading to false after fetch is complete
            setLoading(false);
            console.log(data)
        } catch (error) {
            // add error handling here
            setLoading(false);
            console.log(error);
        }
    }, []);

    // return a Spinner when loading is true
    if (loading) return (
        <span>Loading</span>
    );

    // data will be null when fetch call fails
    if (!data) return (
        <span>Data not available</span>
    );


    const positionsDataStyle = {
        marginTop: "10px",
        display: "table",
        width: "100%",

    }

    const tableCell = {
        display: "table-cell",
        textAlign: "center",
        height: "auto",
        paddingBottom: "5px",
        maxWidth: "30px"
    }

    return (
        <div className="page">
            <div className="page-header">D A S H B O A R D</div>
            <div className="section-row">
                <section className="small-section">
                    <span className="section-header">Currenger Balance</span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ height: "120px", width: "80px"}}>
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>TOTAL:</span><br /><br />
                            <span style={{ fontSize: "16px" }}>0.000000 BTC</span> <br />
                            <span style={{ fontSize: "11px" }}>0000000 <>$</></span>
                        </div>
                        <div style={{ height: "150px", width: "300px" }}>
                            <PieChart data={data} />
                        </div>
                    </div>
                </section>

                <section className="small-section">
                    <span className="section-header">Stats</span>
                    <div className="stats-data" style={positionsDataStyle}>
                        <div id="daily-stat" style={tableCell}>
                            <span className="table-cell-header" >Daily</span>
                        </div>
                        <div id="weekly-stat" style={tableCell}>
                            <span className="table-cell-header" >Weekly</span>
                        </div>
                        <div id="monthly-stat" style={tableCell}>
                            <span className="table-cell-header" >Montly</span>
                        </div>
                        <div id="alltime-stat" style={tableCell}>
                            <span className="table-cell-header" >All Time</span>
                        </div>
                    </div>
                </section>
            </div>

            <section className="big-section">
                <span className="section-header">Positions </span>
                <div className="stats-data" style={positionsDataStyle}>
                    <div id="asset" style={tableCell}>
                        <div className="table-cell-header" >Asset</div>
                        {/* ... */}
                    </div>
                    <div id="amount" style={tableCell}>
                        <div className="table-cell-header">Amount</div>
                        {/* ... */}
                    </div>
                    <div id="price" style={tableCell}>
                        <div className="table-cell-header">Price</div>
                        {/* ... */}
                    </div>
                    <div id="profit" style={tableCell}>
                        <div className="table-cell-header">Profit</div>
                        {/* ... */}
                    </div>
                    <div id="age" style={tableCell}>
                        <div className="table-cell-header">Age</div>
                        {/* ... */}
                    </div>
                    <div id="strategy" style={tableCell}>
                        <div className="table-cell-header">Strategy</div>
                        {/* ... */}
                    </div>
                </div>
            </section>

            <section className="big-section">
                <span className="section-header">Open Orders</span>
                <div className="open-orders-data" style={positionsDataStyle}>
                    <div id="asset" style={tableCell}>
                        <div className="table-cell-header" >Asset</div>
                        {/* ... */}
                    </div>
                    <div id="amount" style={tableCell}>
                        <div className="table-cell-header">Amount</div>
                        {/* ... */}
                    </div>
                    <div id="buy-or-sell" style={tableCell}>
                        <div className="table-cell-header">Buy / Sell</div>
                        {/* ... */}
                    </div>
                    <div id="expected-return" style={tableCell}>
                        <div className="table-cell-header">Expected Return</div>
                        {/* ... */}
                    </div>
                    <div id="action" style={tableCell}>
                        <div className="table-cell-header">Action</div>
                        {/* ... */}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Dashboard
