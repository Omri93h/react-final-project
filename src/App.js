import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Authentication from './components/Authentication';
import Strategies from './components/Strategies';
import Settings from './components/Settings';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';



function App() {
  // const PAGE = {
  //     DASHBOARD:'dashboard'
  // }

  return (
    <Router>

      <div className="App">

        <Header />

        <div className="table">
          <Nav />

          <main>
            <div className="wrapper" style={{ margin: "20px auto", width:"80%"}}>
              <Switch>
                <Route exact path="/" component={Authentication} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/strategies" component={Strategies} />
                <Route path="/Settings" component={Settings} />
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
