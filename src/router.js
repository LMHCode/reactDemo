import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './page/Home/index';
import Socail from './page/Socail/index';
// import Home from './home';

const Router = ({ history }) => (
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/socail" component={Socail} />
    </Switch>
  </HashRouter>
);
export default Router;