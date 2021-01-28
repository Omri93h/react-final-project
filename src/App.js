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
        <Nav />
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/strategies" component={Strategies} />
          <Route path="/Settings" component={Settings} />
        </Switch>
        <Footer />

      </div>

    </Router>
  );
}

export default App;
