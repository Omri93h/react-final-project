import PieChart from './PieChart';
import { useState, useEffect } from 'react';
import Loading from './Loading';


const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect with an empty dependency array works the same way as componentDidMount
    useEffect(() => {
        async function fetchData() {
            let url = 'http://localhost:8080/api/portfolio/';
            let response = await fetch(url, {
                credentials: 'include',
                withCredentials: 'true'
            });
            let commits = await response.json();

            const data = []
            for (const i in commits) {
                if (commits[i].id === 'BTC') {
                    commits[i].amount = Number(commits[i].amount).toFixed(6)
                } else {
                    commits[i].amount = Number(commits[i].amount).toFixed(3)
                }
                data.push({
                    "id": commits[i].id, "label": commits[i].id + " " + commits[i].amount,
                    "amount": commits[i].amount, "value": commits[i].value.toFixed(1)
                })
            }
            return data;
        }
        async function Init() {
            try {
                // set loading to true before calling API
                setLoading(true);
                const data = await fetchData();
                setData(data);
                // switch loading to false after fetch is complete
                setLoading(false);
            } catch (error) {
                // add error handling here
                setLoading(false);
            }
        }
        Init();
    }, []);

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
                    {loading ?
                        <Loading data={data} isLoading={loading} />
                        :
                        <div className="fade-in-fast" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
                            <div style={{ height: "120px", width: "80px" }}>
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>TOTAL:</span><br /><br />
                                <span style={{ fontSize: "16px" }}>0.000000 BTC</span> <br />
                                <span style={{ fontSize: "11px" }}>0000000 <>$</></span>
                            </div>
                            <div style={{ height: "140px", width: "200px", marginTop: "20px" }}>
                                <PieChart data={data} />
                            </div>
                        </div>
                    }

                </section>

                <section className="small-section" >
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
