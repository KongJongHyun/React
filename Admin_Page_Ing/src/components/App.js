import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './content';

const App = () => (
  <Router basename='/'>
    <Switch>
      <Route path='/' component={Content} />
    </Switch>
  </Router>
);

export default App;


