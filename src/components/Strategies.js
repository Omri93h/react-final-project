import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import strategies from './../data/strategies.json'
import { Switch, Route, Link } from 'react-router-dom';
import SetStrategy from './SetStrategy';
import Loading from './Loading';
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

async function deleteActiveStrategy(strategy_id) {
    await fetch(`http://localhost:8080/api/strategy/${strategy_id}`, {
        method: "DELETE",
        credentials: 'include',
        withCredentials: 'true'
    })
}

async function editActiveStrategy(strategy_id) {
    await fetch(`http://localhost:8080/api/strategy/${strategy_id}`, {
        method: "PUT",
        credentials: 'include',
        withCredentials: 'true'
    })
}

async function getActiveStrategies(setLoading, setActiveStrategies) {
    let res = await fetch('http://localhost:8080/api/strategy', {
        credentials: 'include',
        withCredentials: 'true'
    })
    res = await res.json();
    setActiveStrategies(res);
    setLoading(false)
}

const Strategies = ({ userData }) => {
    const [activeStrategies, setActiveStrategies] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const [isPremiumPopup, setPremiumPopup] = useState(false);
    const [isDetDeleteVerifyPopup, setDeleteVerifyPopup] = useState(false);
    const [strategyToDelete, setStrategyToDelete] = useState(null);

    const closeModal = () => {
        setPremiumPopup(false);
        setDeleteVerifyPopup(false);
    }

    useEffect(() => {
        setLoading(true);
        setActiveStrategies(undefined);
        getActiveStrategies(setLoading, setActiveStrategies);
    }, []);

    const StrategyPage = [];
    strategies.forEach((strategy) => (
        StrategyPage.push(strategy.name.replaceAll(" ", "_"))
    ));

    function handleDeleteVerifyPopup(strategy_id) {
        setDeleteVerifyPopup(!isDetDeleteVerifyPopup);
        setStrategyToDelete(strategy_id);
    }

    function handleDelete(strategy_id) {
        deleteActiveStrategy(strategy_id);
        setActiveStrategies(activeStrategies.filter(i => i.strategy_id !== strategy_id))
    }

    function handleEdit(strategy_id) {
        console.log(strategy_id);
    }

    function handlePremiumPopup(isPremiumStrategy, isPremiumUser) {
        if (isPremiumStrategy && !isPremiumUser) {
            setPremiumPopup(!isPremiumPopup)
        }
    }



    const deleteIconStyle = { position: "absolute", right: "0", zIndex: "1" };
    const editIconStyle = { position: "absolute", left: "0", zIndex: "1" };

    const cardContentStyle = {
        marginTop: "40px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontSize: "14px"
    }

    const strategiesPage = () => {
        return (
            <div className="page">
                <span className="page-header">S T R A T E G I E S</span>
                <section className="big-section" id="active-strategies">
                    <span className="section-header">My Strategies</span>
                    <Grid container spacing={3} justify="center" alignItems="center">
                        <Grid container item xs={12} spacing={3}>
                            {loading ?
                                <Loading activeStrategies={activeStrategies} isLoading={loading} />
                                :
                                activeStrategies.map((activeStrategy) => (
                                    <div className="active-strategy" key={activeStrategy.strategy_id}>
                                        <IconButton aria-label="delete" onClick={() =>
                                            handleDeleteVerifyPopup(activeStrategy.strategy_id)}
                                            style={deleteIconStyle}>
                                            <DeleteIcon />
                                        </IconButton>

                                        <Popup modal
                                            trigger={<IconButton
                                                aria-label="edit"
                                                onClick={() => handleEdit(activeStrategy.strategy_id)}
                                                style={editIconStyle}>
                                                <EditIcon />
                                            </IconButton>}>
                                            <form style={{ fontFamily: 'ubuntu' }}>
                                                <label>Profit </label>
                                                <input type="number" name="take_profit" /> <br />
                                                <label>stop loss </label>
                                                <input type="number" name="stop_loss" /> <br />
                                                <input type="submit" value="submit" />
                                            </form>
                                        </Popup>

                                        <div className="card-header"> {activeStrategy.currency}</div>
                                        <div className="card-content"
                                            style={cardContentStyle}>
                                            <div style={{ fontSize: "13px" }}>
                                                {
                                                    activeStrategy.status === "waiting_to_buy" ?
                                                        <span style={{ color: "green" }}>Waiting To <b>BUY</b></span> :
                                                        <span style={{ color: "red" }}>Waiting To <b>SELL</b></span>
                                                }
                                            </div><br /><br />
                                            <span style={{ fontFamily: "monospace", fontSize: "22px" }}> {activeStrategy.strategy_type}</span>
                                            <br /><br />
                                            <span>Amount:  <b>{activeStrategy.amount + " " +
                                                activeStrategy.currency.slice(0, -3)} </b></span>
                                            <span>Expected Profit:  <b>{activeStrategy.take_profit}%</b></span>
                                            <span>Stop Loss at:  <b>{activeStrategy.stop_loss}%</b></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <div id="active-strategies-container"></div>
                </section>

                <section className="big-section">
                    <div className="section-header">Add Strategy</div>
                    <Grid container spacing={3} justify="center" alignItems="center">
                        <Grid container item xs={12} spacing={3}>
                            {strategies.map((strategy) => (
                                <Link
                                    key={strategy.id}
                                    to={
                                        strategy.isPremium && !userData.is_premium ?
                                            '/Strategies'
                                            :
                                            `Strategies/${StrategyPage[strategy.id]}`}
                                >
                                    <div className="card" key={strategy.id}
                                        onClick={() => handlePremiumPopup(strategy.isPremium, userData.is_premium)}>
                                        <div className="card-header">{strategy.name}</div>
                                        <img className="card-image" src={strategy.img} alt={strategy.name} />
                                    </div>
                                </Link>
                            ))
                            }
                            <Popup open={isPremiumPopup} onClose={closeModal}>
                                <div className="modal">
                                    <a className="close" onClick={closeModal}>&times;</a> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                                    ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                                    doloribus. Odit, aut.
                            </div>
                            </Popup>
                        </Grid>
                    </Grid>
                </section>

                <Popup open={isDetDeleteVerifyPopup} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <a className="close" onClick={closeModal}>&times;</a>
                        <AssignmentLateIcon style={{ fontSize: 80, color: "orange" }} /><br />
                        <span style={{ color: "#888" }}>
                            Delete this strategy?
                            </span>
                        <br />
                        <div style={{ margin: "50px 0px 20px 0px", display: "flex", justifyContent: "space-around" }}>
                            <Button
                                variant="contained"
                                style={{ background: "green", color: "white" }}
                                onClick={() => {
                                    handleDelete(strategyToDelete)
                                    setDeleteVerifyPopup(false)
                                }}>
                                Yes, Delete it
                        </Button>
                        &nbsp;
                        <Button 
                        variant="contained"
                        style={{ background: "red", color: "white" }}
                         onClick={() =>
                                setDeleteVerifyPopup(false)
                            }>
                                No
                        </Button>
                        </div>

                    </div>
                </Popup>

            </div >

        )
    }

    return (
        <div>
            <Switch>
                {StrategyPage.map(pageName =>
                    <Route path={("/strategies/" + pageName)} component={SetStrategy} key="setStrategy" />)
                }
                <Route path="/strategies" component={strategiesPage} key="strategies" />
            </Switch>
        </div >
    )
}

export default Strategies
