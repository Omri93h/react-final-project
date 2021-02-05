import React from 'react'

const Dashboard = () => {

    const statsDataStyle = {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-evenly",
        fontSize: "19px",
        color: "#666"
    }
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
                </section>

                <section className="small-section">
                    <span className="section-header">Stats</span>
                    <div className="stats-data" style={statsDataStyle}>
                        <div id="daily-stat">Daily</div>
                        <div id="weekly-stat">Weekly</div>
                        <div id="monthly-stat">Montly</div>
                        <div id="alltime-stat">All Time</div>
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
