import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import strategies from './../data/strategies.json'
import { Switch, Route, Link } from 'react-router-dom';
import SetStrategy from './SetStrategy';
import Loading from './Loading';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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

const Strategies = ({ userData }) => {
    const [activeStrategies, setActiveStrategies] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        async function getActiveStrategies() {
            let res = await fetch('http://localhost:8080/api/strategy', {
                credentials: 'include',
                withCredentials: 'true'
            })
            res = await res.json();
            setActiveStrategies(res);
            setLoading(false)
        }

        getActiveStrategies();
    }, []);


    const StrategyPage = [];
    strategies.forEach((strategy) => (
        StrategyPage.push(strategy.name.replaceAll(" ", "_"))
    ));

    const deleteIconStyle = { position: "absolute", right: "0", zIndex: "1" };
    const editIconStyle = { position: "absolute", left: "0", zIndex: "1" };

    function handleDelete(strategy_id) {
        deleteActiveStrategy(strategy_id);
        setActiveStrategies(activeStrategies.filter(i => i.strategy_id !== strategy_id))
    }

    function handleEdit(strategy_id) {

    }

    function handlePremiumPopup(isPremiumStrategy, isPremiumUser) {
        if (isPremiumStrategy && !isPremiumUser) {
            console.log("user in not premium");
            console.log("user isPremium: ", isPremiumUser);
            setOpen(!open)
        }
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
                                    <div className="active-strategy" key={activeStrategy.strategy_id} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8 90%)' }} >
                                        <IconButton aria-label="delete" onClick={() => handleDelete(activeStrategy.strategy_id)}
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

                                        <div className="card-header"> {activeStrategy.strategy_type}</div>
                                        <div className="card-content" style={{ marginTop: "30px", height: "100%", display: "flex", flexDirection: "column" }}>
                                            <span style={{ fontSize: "12px" }}>
                                                {activeStrategy.status}
                                            </span><br />
                                            <span style={{ fontSize: "30px" }}> {activeStrategy.currency}</span><br />
                                            <span>Expected Profit:  {activeStrategy.take_profit}%</span>
                                            <span>Stop Loss:  {activeStrategy.stop_loss}%</span>
                                            <span>Amount:  {activeStrategy.amount}</span>
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
                                    to={strategy.isPremium && !userData.is_premium ?
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
                            <Popup open={open} onClose={closeModal}>
                                <div className="modal">
                                    {/* <a className="close" onClick={closeModal}>&times;</a> <br/> */}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                                    omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                                    ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                                    doloribus. Odit, aut.
                                </div>
                            </Popup>
                        </Grid>
                    </Grid>
                </section>
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
