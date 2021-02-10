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
import { useState } from 'react';
import Cookies from 'js-cookie';



function App() {
  const location = useLocation();


  const [isAuthorized, setAuth] = useState(false);
  const authorization = { isAuthorized, setAuth };

  let cookies = Cookies.get();
  // alert("cookies: ", cookies);
  if (cookies) {
    console.log("WE HAVE COOKIES");
    // setAuth(true);
  } else {
    console.log("No COOKIES!")
  }

  const [userName, setUserName] = useState("");
  const userControl = { userName, setUserName }

  return (
    <div className="App">

      {isAuthorized ?

        (<>
          <Header userConnected={isAuthorized} username={userName} />
          <div className="table">

            <Nav /> 
            <main>

              <div className="wrapper">

                <TransitionGroup>
                  <CSSTransition key={location.pathname} timeout={400} classNames="fade">
              
                    <Switch location={location}>
                      <Route exact path="/" render={() => (<Redirect to="/Dashboard" />)} />
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
          <Welcome auth={authorization} user={userControl} />
          <Switch>
            <React.Fragment>
              <Route path="/login"/>
              {/* <Route path="/" render={(props) => <Welcome auth={authorization} user={userControl} />} /> */}
              <Route path="/sign-up"/>
              <Route path='*'>
                <Redirect to="/" />
              </Route>

            </React.Fragment>
          </Switch>
        </>)
      }

    </div >
  )
}

export default App;
