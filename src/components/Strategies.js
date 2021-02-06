import { Grid } from '@material-ui/core';
import strategies from './../data/strategies.json'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SetStrategy from './SetStrategy';


const Strategies = () => {
    const setStrategyPage = [];
    strategies.forEach((strategy) => (
        setStrategyPage.push(strategy.name.replaceAll(" ", "_"))
    ))

    const strategiesPage = () => {
        return (
            <div className="page">

                <span className="page-header">S T R A T E G I E S</span>
                <section className="big-section" id="active-strategies">

                    <span className="section-header">My Strategies</span>
                    <div id="active-strategies-container"></div>
                </section>

                <section className="big-section">
                    <div className="section-header">Add Strategy</div>
                    <Grid container spacing={3} justify="center" alignItems="center">
                        <Grid container item xs={12} spacing={3}>
                            {strategies.map((strategy) => (
                                <Link to={`Strategies/${setStrategyPage[strategy.id]}`}>
                                    <div className="card" key={strategy.id}>
                                        <div className="card-header">{strategy.name}</div>
                                        <img className="card-image" src={strategy.img} alt={strategy.name} />
                                    </div>
                                </Link>
                            ))
                            }
                        </Grid>
                    </Grid>
                </section>
            </div>

        )
    }

    return (
        <div>
            <Switch>
                {setStrategyPage.map(pageName =>
                    <Route path={("/strategies/" + pageName)} component={SetStrategy} />)
                }
                <Route path="/strategies" component={strategiesPage} />
            </Switch>
        </div >
    )
}

export default Strategies
