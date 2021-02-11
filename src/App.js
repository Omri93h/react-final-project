import './App.css';
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Strategies from './components/Strategies';
import Settings from './components/Settings';
import Welcome from './components/Welcome';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import SetStrategy from './components/SetStrategy';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageError from './components/PageError'
import { useState, useEffect } from 'react';

import Login from './components/Login';

async function getUser(setAuth, setHasBinanceAPI, setThumbnailUrl) {
  const response = await fetch('http://localhost:8080/profile', {
    credentials: 'include'
  })
  let userData = "";
  try {
    userData = await response.json();
    if (userData.binance_key !== "") {
      setHasBinanceAPI(true)
      setThumbnailUrl(userData.thumbnail)
    }
    setAuth(true);
    return userData.username;
  }
  catch {
    setAuth(false);
    return null
  }
}

function App() {
  const location = useLocation();
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [isAuthorized, setAuth] = useState(false);
  const [hasBinanceAPI, setHasBinanceAPI] = useState(false);
  const authorization = { isAuthorized, setAuth };

  useEffect(() => {
    async function Fetch() {
      const username = await getUser(setAuth, setHasBinanceAPI, setThumbnailUrl);
      setUserName(username)
    }
    Fetch();
  }, []);

  const [userName, setUserName] = useState("");
  const userControl = { userName, setUserName }

  return (
    <div className="App">
      {
        isAuthorized ?
          (
            <>
              <Header authorization={authorization} username={userName} thumbnail={thumbnailUrl} />
              {
                hasBinanceAPI ?
                  <>
                    <div className="table">

                      <Nav />
                      <main>

                        <div className="wrapper">

                          <TransitionGroup>
                            <CSSTransition key={location.pathname} timeout={400} classNames="fade">

                              <Switch location={location} name="logged-in">
                                <Route exact path="/" render={() => (<Redirect to="/Dashboard" />)} />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route exact path="/strategies" component={Strategies} />
                                <Route path="/settings" component={Settings} />
                                <Route path="/strategies/:strategyName" component={SetStrategy} />
                                <Route path='*' component={PageError} />
                              </Switch>

                            </CSSTransition>

                          </TransitionGroup>

                        </div>
                        <Footer />

                      </main>

                    </div>
                  </>
                  :
                  <>
                    <Switch location={location} name="no-API"  >
                      <Route path='*' render={() => (<Login setHasBinanceAPI={setHasBinanceAPI} />)} />
                    </Switch>
                  </>
              }
            </>
          )
          :
          (
            <>
              <Header authorization={authorization} username={userName} thumbnail={thumbnailUrl} />

              <Switch name="not-logged-in">
                <React.Fragment>
                  <Route exact path="/" render={() => <Welcome auth={authorization} user={userControl} />} />
                  <Route path="/sign-up" />
                  {isAuthorized && hasBinanceAPI ? {} : <Redirect to="/" />}
                </React.Fragment>
              </Switch>
            </>
          )
      }

    </div >

  )
}

export default App;
