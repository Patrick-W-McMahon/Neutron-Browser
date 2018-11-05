import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import WebPage from './containers/WebPage';

export default (
  <Switch>
    <Route exact path="/" component={WebPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
  </Switch>
);
