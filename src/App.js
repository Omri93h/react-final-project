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
import ManualOrder from './components/ManualOrder';

async function testConnection() {
  fetch('http://localhost:8080/api/binance/connect', {
    credentials: 'include',
    withCredentials: 'true'
  })
}

async function getUser(setAuth, setHasBinanceAPI, setThumbnailUrl) {
  const response = await fetch('http://localhost:8080/profile', {
    credentials: 'include'
  })
  let userData = "";
  try {
    userData = await response.json();
    if (userData.binance_key !== "") {
      await testConnection();
      setHasBinanceAPI(true)
      setThumbnailUrl(userData.thumbnail)
    }
    setAuth(true);

    return userData;
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
  const [userData, setUserData] = useState(undefined);
  const [userBalance, setUserBalance] = useState(undefined);
  const [userOrders, setUserOrders] = useState("");
  const [userTotal, setUserTotal] = useState({ BTC: 0, USD: 0 });

  const authorization = { isAuthorized, setAuth };
  const balance = { userBalance, setUserBalance };
  const orders = { userOrders, setUserOrders };
  const totalValue = { userTotal, setUserTotal };

  useEffect(() => {
    (async function Fetch() {
      const data = await getUser(setAuth, setHasBinanceAPI, setThumbnailUrl);
      setUserData(data)
    })();
  }, []);


  const userControl = { userData, setUserData }

  return (
    <div className="App">
      {
        isAuthorized ?
          (
            <>
              <Header authorization={authorization} username={
                userData ? userData.username : ""} thumbnail={thumbnailUrl}
              />
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
                                <Route exact path="/" render={() => (
                                  <Redirect to="/Dashboard" balance={balance} orders={orders} totalValue={totalValue} />)}
                                />
                                <Route path="/dashboard" render={() => (
                                  <Dashboard balance={balance} orders={orders} totalValue={totalValue} />
                                )} />
                                <Route exact path="/strategies" render={() => <Strategies userData={userData} />} />
                                <Route path="/settings" component={Settings} />
                                <Route path="/Manual_Order" component={ManualOrder} />
                                <Route path="/strategies/:strategyName" component={SetStrategy} />
                                <Route path='*' component={PageError} />
                              </Switch>

                            </CSSTransition>

                          </TransitionGroup>

                        </div>
                        {/* <Footer /> */}

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
              <Header authorization={authorization} username={userData ? userData.username : ""} thumbnail={thumbnailUrl} />

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
