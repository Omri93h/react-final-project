import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Authentication from './components/Authentication';
import Strategies from './components/Strategies';
import Settings from './components/Settings';
import Welcome from './components/Welcome';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import SetStrategy from './components/SetStrategy';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageError from './components/PageError'
import { useState } from 'react';



function App() {
  const location = useLocation();
  const [isAuthorized, setAuth] = useState(false);
  const a = { isAuthorized, setAuth }
  // setAuth = () => {
  //   !isAuthorized
  // }

  return (
    <div className="App">

      {isAuthorized ?

        (<>
          <Header userConnected={isAuthorized} />
          <div className="table">

            <Nav />
            <main>

              <div className="wrapper">

                <TransitionGroup>
                  <CSSTransition key={location.pathname} timeout={400} classNames="fade">

                    <Switch location={location}>
                      <Route exact path="/" render={() => (<Redirect to="/Dashboard" />)} />
                      <Route path="/authentication" component={Authentication} />
                      <Route path="/dashboard" component={Dashboard} />
                      <Route exact path="/strategies" component={Strategies} />
                      <Route path="/settings" component={Settings} />
                      <Route path="/strategies/:strategyName" component={SetStrategy} />
                      <Route exact path='*' component={PageError} />
                    </Switch>

                  </CSSTransition>

                </TransitionGroup>

              </div>
              <Footer />

            </main>

          </div>

        </>)

        :

        (<>
          <Header userConnected={isAuthorized} />
          <Switch>
            <Route render={(props) => <Welcome auth={a} />} />
            <Route path='*'>
              <Redirect to="/" exact />
            </Route>

          </Switch>
        </>)
      }

    </div>
  )
}

export default App;
