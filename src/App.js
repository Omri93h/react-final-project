import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Authentication from './components/Authentication';
import Strategies from './components/Strategies';
import Settings from './components/Settings';
import Welcome from './components/Welcome';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SetStrategy from './components/SetStrategy';



function App() {
  // const PAGE = {
  //     DASHBOARD:'dashboard'
  // }

  return (
    <Router>

      <div className="App">

        <Header userConnected={true} />

        <div className="table">

          <Nav />

          <main>
            <div className="wrapper" style={{ margin: "0px auto 30px auto ", width: "90%" }}>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/authentication" component={Authentication} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/strategies" component={Strategies} />
                <Route path="/settings" component={Settings} />
                <Route path="/strategies/:strategyName" component={SetStrategy} />
              </Switch>

            </div>
            <Footer />
          </main>

        </div>


      </div>
    </Router>
  );
}

export default App;
