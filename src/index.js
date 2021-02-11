import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(

  <Router>
    {/* <CookiesProvider> */}
      <Route path="/" component={App} />
    {/* </CookiesProvider> */}
  </Router >
  ,
  document.getElementById('root')
);

reportWebVitals();
