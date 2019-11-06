import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Copyright from './component/Copyright';
import Home from './component/Home';
import Menu from './component/Menu';
const App = () => (
 
  <Router>
    <>
    <Route exact path="/" component={Copyright} />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/menu" component={Menu} />
    </Switch>
    </>
  </Router>
  
);

export default App;
